import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { VictimServicesService } from '../services/victim-services.service';
import { RescueTeamService } from '../services/rescue-team.service';
import { RequestReceived } from '../model/RequestReceived';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { WebSocketService } from '../services/web-socket.service';
import { ThrowStmt } from '@angular/compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ChatMessageDto } from '../model/ChatMessageDto';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { chatMessage, Messagetype } from '../model/ChatMessage';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { time } from 'console';
import { MessageService} from '../services/message.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-chat-lobby',
  templateUrl: './chat-lobby.component.html',
  styleUrls: ['./chat-lobby.component.css']
})
export class ChatLobbyComponent implements OnInit {
  webSocketEndPoint: string = 'http://localhost:8080/ws';

  //topic: string = "/topic/greetings";
  request: RequestReceived;
  rescueTeam: any;
  messages: any[]=[];
  channelList!: String[];
  user: any;
  chatMessage?: ChatMessageDto;
  chatform: any;
  message: any=[];
  messageInput: any;
  sentMessages: any[]=[];

  constructor(private authService:AuthService,private webSocketService:WebSocketService,private dialog: MatDialog, private localStorage: LocalStorageService, private vicServices: VictimServicesService, private reqServices: RescueTeamService,private messageService: MessageService ,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.request = this.localStorage.retrieve('request');
    this.user = this.localStorage.retrieve('username');

    if (this.user != null) {
        this.authService.getUser(this.user).subscribe(
          (response:any)=>{
            this.rescueTeam=response.rescueTeamId;
            this.reqServices.getRescueTeam(response.rescueTeamId).subscribe(
              (response:any)=>{
                  this.channelList=[response.requestId];
                  this.rescueTeam=response;
                  
              }
            )
          }
        )
        
    }
    else {
      this.vicServices.getRequest(this.request.requestId).subscribe(data => {  
        this.webSocketService.subscribeToVictimchannel(this.request.requestId);
        var received_message_from_topic_chat=this.webSocketService.subscribeToTopicChat();
    
        console.log(received_message_from_topic_chat);
          this.rescueTeam = this.reqServices.getRescueTeam(data.resTeamObj).subscribe(
            (response) => {
                this.rescueTeam = response,
                this.channelList = this.rescueTeam.members;

            },
            (error) => console.log(error)
          );
      }, error => {
        console.log(error)
      });
      //  this.channelList=[this.emp1,this.emp2,this.emp3];
    }
    this.chatform = new FormGroup({
      messageInput: new FormControl(''),
    });

  }

 
  ngOnInit(): void {
    //this.request = this.localStorage.retrieve('request');this.request = this.localStorage.retrieve('request');
    this.messages = this.data;
    this.connect();
  }
  
  connect() {

    var received_message_from_topic_chat=this.webSocketService.subscribeToTopicChat();

    console.log(received_message_from_topic_chat);
   // this.sendMessage.push(received_message_from_topic_chat);
  }

  disconnect() {
    this.webSocketService.closeWebSocket();
  }

  
  sendMessage(){
    if(this.user!=null){this.sendMessageToVictim();}
    else{this.sendMessageToVictim();}
  }
  sendMessageToVictim(){
    let messageContent = this.chatform.get('messageInput')!.value;
    let channel = "/app/chat/" + this.rescueTeam.requestId + "/sendToVictim"
    let messageToSend = new ChatMessageDto(channel, Date(), this.request.requestId.toString(), messageContent, this.rescueTeam.rescueTeamId);
    this.sentMessages.push(messageToSend);
    this.messageService.sendMessageById(channel,messageToSend);
  }
  sendMessageToRescueTeam() {
    let messageContent = this.chatform.get('messageInput')!.value;
    let channel = "/app/chat/" + this.rescueTeam.rescueTeamId + "/sendToRescueTeam"
    let messageToSend = new ChatMessageDto(channel, Date(), this.request.requestId.toString(), messageContent, this.rescueTeam.rescueTeamId);
    this.sentMessages.push(messageToSend);
    this.messageService.sendMessageById(channel,messageToSend);
  }

  close() {
    this.dialog.closeAll();
  }

}