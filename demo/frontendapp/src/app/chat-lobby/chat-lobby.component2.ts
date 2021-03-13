import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-chat-lobby',
  templateUrl: './chat-lobby.component.html',
  styleUrls: ['./chat-lobby.component.css']
})
export class ChatLobbyComponent implements OnInit {
 
  ws:any;
  request:any;
  user:any;

  constructor(private localStorage: LocalStorageService){}
  


  ngOnInit(): void {
    this.request = this.localStorage.retrieve('request');this.request = this.localStorage.retrieve('request');
    this.user = this.localStorage.retrieve('username');
  }

  connect(){

    let socket = new SockJS("http://localhost:8080/socket");
    let ws = Stomp.Stomp.over(socket);
    ws.connect({},(data:any)=>{console.log(data)});
    ws.subscribe("/topic/chat",(data:any)=>{console.log(data)});
    this.ws=ws;
    this.ws.subscribe("/channel/"+this.request.resTeamObj+"/",(message: { body: any; }) => {
      console.log(JSON.parse(message.body));
      console.log("----------............asdasd.");
    });
    let messageToSend = {sender:this.user,type:'JOIN'};
    this.ws.send("/app/chat/"+this.request.resTeamObj+"/addUser",{},JSON.stringify(messageToSend));
        
  }

  disconnect(){
  }

  sendMessage() {
    //let messageContent = this.chatform.get('message').value;
    let socket = new SockJS("http://localhost:8080/socket");
    let ws = Stomp.Stomp.over(socket);
    
    let messageToSend = new chatMessage(Messagetype.CHAT,"MESSSSSSAGEEE",this.user);
    console.log(messageToSend);
    ws.send("/topic/chat/", {}, JSON.stringify(messageToSend));
    ws.send("/app/hello/"+this.request.resTeamObj+"/sendMessage/", {}, JSON.stringify(messageToSend));
}

  sendMessage2(){
  }

}