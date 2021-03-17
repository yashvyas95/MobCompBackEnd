import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';
import { ChatMessageDto } from '../model/ChatMessageDto';
import { webSocket} from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  topic : String = "/topic/chat";
  stompClient: any;
  webSocket: any;
  chatMessages: any = [];
  backendsocket_URL = "http://localhost:8080/socket";
  socket:any;
  constructor() {
    this.socket = new SockJS(this.backendsocket_URL);
    this.webSocket = Stomp.Stomp.over(this.socket);
    this.connectToWebSocket();
    this.subscribeToTopicChat();
   }

  connectToWebSocket(){
  //  let socket = new SockJS(this.backendsocket_URL);
    this.webSocket = Stomp.Stomp.over(this.socket);
    this.webSocket=this.webSocket.connect({},(frame:any)=>{});
  }

  subscribeToVictimchannel(requestId:number){
    this.webSocket = Stomp.Stomp.over(this.socket);
    this.webSocket=this.webSocket.connect({},(frame:any)=>{});
      this.webSocket.subscribe("/topic/chat/"+requestId.toString(),(message: { body: string; }) => {
        console.log(message.body);
        return message.body;
      });
  }
  subscribeToRescueTeamChannel(){}

  subscribeToTopicChat():any{
      this.webSocket = Stomp.Stomp.over(this.socket);
      this.webSocket=this.webSocket.connect({},(frame:any)=>{});
      let socket = new SockJS(this.backendsocket_URL);
      this.webSocket = Stomp.Stomp.over(this.socket);
      this.webSocket.connect({},(frame:any)=>{
        this.webSocket.subscribe("/topic/chat", (message: { body: string; }) => {
          console.log(message.body);
          return message.body;  
        }); 
      });
  }

  sendMessage(channel:string,message:ChatMessageDto):void{
    this.webSocket.send(channel,{},JSON.stringify(message));
}

  public closeWebSocket():void{
    this.webSocket.close();
  }

  

}