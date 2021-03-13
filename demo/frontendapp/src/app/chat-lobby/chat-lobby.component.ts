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
import { chatMessage , Messagetype} from '../model/ChatMessage';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { time } from 'console';

@Component({
  selector: 'app-chat-lobby',
  templateUrl: './chat-lobby.component.html',
  styleUrls: ['./chat-lobby.component.css']
})
export class ChatLobbyComponent implements OnInit {
  webSocketEndPoint: string = 'http://localhost:8080/ws';

  topic: string = "/topic/greetings";
  request:RequestReceived;
  title = 'WebSocketChatRoom';
  rescueTeam : any;
  x:any;
  greetings: string[] = [];
  disabled = true;
  messages:any;
  private stompClient:any;
  channelList!:String[];
  user:any;
  //greetings: string[] = [];
  showConversation: boolean = false;
  ws: any;
  chatMessage: ChatMessageDto | undefined;
//  name: string;
 // disabled: boolean;
  chatform:any;
  message:any;
  messageInput:any;
  constructor(private dialog:MatDialog,private localStorage: LocalStorageService,private vicServices : VictimServicesService,private reqServices : RescueTeamService,private webSocketService : WebSocketService,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.request = this.localStorage.retrieve('request');
    this.user = this.localStorage.retrieve('username');
    if(this.user!=null){
      console.log("INSIDE");
    }
    else{
      console.log(this.request);
    console.log(this.request.resTeamObj);
    this.vicServices.getRequest(this.request.requestId).subscribe(data => {
      console.log(data),
      this.rescueTeam=this.reqServices.getRescueTeam(data.resTeamObj).subscribe(
        (response)=>{
          console.log(response),
          this.rescueTeam=response,
          this.channelList=this.rescueTeam.members;
        },
        (error)=>console.log(error)
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
    this.messages=this.data;
    console.log(this.messages);
    this.connect();
  }

  connect(){

      //connect to stomp where stomp endpoint is exposed
      //let ws = new SockJS(http://localhost:8080/greeting);
      let socket = new SockJS("http://localhost:8080/socket");
      let messages1 : any[];
      this.ws = Stomp.Stomp.over(socket);
      this.ws.connect({}, (frame: any) => {
        this.ws.subscribe("/errors", function(message: { body: string; }) {
          alert("Error " + message.body);
        });

        this.ws.subscribe("/topic/chat", (message: { body: string; }) => {
          console.log((message.body));
          //console.log(JSON.parse(message.body.content))
          var MessageReceived =(message.body);
         // console.log(MessageReceived);

          this.messages.push(MessageReceived);
          console.log(this.messages);
          
          console.log("ALL MESSAGES"+this.messages);
          //this.messages.push(messages1);
         // this.messages.set("content",message.body.content)
         // console.log(this.messages);
        });
        let messageToSend = {sender:this.user,type:'JOIN'};
        //new chatMessage(Messagetype.CHAT,this.chatform.get('message').value,"TEST");
        //this.ws.send("/app/chat/"+this.request.resTeamObj+"/addUser",{},JSON.stringify(messageToSend));
        //let messageContent = "TEST_MESSAGE";
        //let messageToSend2 = new chatMessage(Messagetype.CHAT,messageContent,this.user);
       // this.ws.send("/app/chat/"+this.request.resTeamObj+"/sendMessage",{},JSON.stringify(messageToSend2));
       this.ws.subscribe("/topic/chat/channel/1",(message: { body: any; }) => {
          var x = console.log(JSON.parse(message.body));
          console.log("----------............asdasd."+x);
        });
        this.disabled = true;
      }, function(error: string) {
        alert("STOMP error " + error);
      });
      //let messageToSend = new chatMessage(Messagetype.CHAT,"TEST MESSAGE",this.user);
      //this.ws.send("/topic/chat/", {}, JSON.stringify(messageToSend));
      
  }

  disconnect(){
    this.webSocketService.closeWebSocket();
  }
  sentMessages:any;
  sendMessage() {
    
    let timestamp =  new Date();
    let messageContent = this.chatform.get('messageInput')!.value;
    console.log("Message INPUT"+messageContent)
    //let messageToSend = new chatMessage(Messagetype.CHAT,messageContent,"request");
    //chat/{rescueTeamId}/send
    let channel = "/app/chat/"+this.rescueTeam.rescueTeamId+"/sendToRescueTeam"
    let messageToSend = new ChatMessageDto(channel,Date(),this.request.requestId.toString(),messageContent,this.rescueTeam.rescueTeamId);
    console.log(messageToSend);
    this.ws.send(channel, {},JSON.stringify(messageToSend));
    //this.ws.send("/app/chat", {},messageContent);
}


  sendMessage2(){
      //const message = new ChatMessageDto("test2",this.newmessage);

      this.webSocketService.sendMessage("Message");
      console.log();
  }

  close(){
    this.dialog.closeAll();
  }

/*
title = 'angular-chat';
  channel: ChannelData;
  username = '';
  messages: Message[] = [];
  newMessage = '';
  channelList: ChannelData[];
  chatClient: any;
  currentUser: User;

  async joinChat() {
    const { username } = this;
    try {
      const response = await axios.post('http://localhost:5500/join', {
        username,
      });
      const { token } = response.data;
      const apiKey = response.data.api_key;

      this.chatClient = new StreamChat(apiKey);

      this.currentUser = await this.chatClient.setUser(
        {
          id: username,
          name: username,
        },
        token
      );

      const channel = this.chatClient.channel('team', 'talkshop');
      await channel.watch();
      this.channel = channel;
      this.messages = channel.state.messages;
      this.channel.on('message.new', event => {
        this.messages = [...this.messages, event.message];
      });

      const filter = {
        type: 'team',
        members: { $in: [`${this.currentUser.me.id}`] },
      };
      const sort = { last_message_at: -1 };

      this.channelList = await this.chatClient.queryChannels(filter, sort, {
        watch: true,
        state: true,
      });
    } catch (err) {
      console.log(err);
      return;
    }
  }

  async sendMessage() {
    if (this.newMessage.trim() === '') {
      return;
    }

    try {
      await this.channel.sendMessage({
        text: this.newMessage,
      });
      this.newMessage = '';
    } catch (err) {
      console.log(err);
    }
  }
*/

}