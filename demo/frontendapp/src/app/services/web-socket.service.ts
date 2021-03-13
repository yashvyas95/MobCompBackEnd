import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  topic : String = "/topic/chat";
  stompClient: any;
  webSocket: any;
  chatMessages: any = [];

  constructor() { }


  public connect(){
    console.log("Initialize WebSocket Connection");
       
        this.stompClient = Stomp.Stomp.over(function(){
                    return new WebSocket('ws://localhost:8080/socket/')
                  });
        const _this = this;
        let ws = new SockJS(this.webSocket);
        console.log(ws);
        this.stompClient.connect({},  (frame: any) => {
            this.stompClient.subscribe(_this.topic,  (sdkEvent: string) => {
                this.onMessageReceived(sdkEvent);
            });
            //_this.stompClient.reconnect_delay = 2000;
        });
  }

/*
  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8080/ws');

    this.webSocket.onopen = (event: any) => {
      console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event: any) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event : any) => {
      console.log('Close: ', event);
    };
  }
*/
  sendMessage(message:any) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/hello", {}, JSON.stringify(message));
}

  public closeWebSocket() {
    this.webSocket.close();
  }

  onMessageReceived(message: string) {
    console.log("Message Recieved from Server :: " + message);
   // this.handleMessage(JSON.stringify(message.body));
}
}