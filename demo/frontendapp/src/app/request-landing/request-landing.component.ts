import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { MessageService } from '../services/message.service';
import { RescueTeamService } from '../services/rescue-team.service';
import { RequestService } from '../services/request.service';
import { RescueTeam } from '../model/RescueTeam';
import { fromEventPattern, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RescueTeamInfoDialogComponent } from '../rescue-team-info-dialog/rescue-team-info-dialog.component';
import { ChatLobbyComponent } from '../chat-lobby/chat-lobby.component'; 
import { AllMessagesDialogComponent } from '../all-messages-dialog/all-messages-dialog.component';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-request-landing',
  templateUrl: './request-landing.component.html',
  styleUrls: ['./request-landing.component.css']
})
export class RequestLandingComponent implements OnInit {

  constructor(private websocketService:WebSocketService ,private dialog:MatDialog,private http : HttpClient,private requestService: RequestService,private rescueTeamService: RescueTeamService,private localStorage: LocalStorageService, private messageService : MessageService) { 
  }
  ws:any;
  allMessages:any;
  displayedColumns=['sender','content','timestamp'];
  requestObject:any;
  displayedColumns2=['requestId','members'];
  rescueTeamObject:any;
  allCOllection!:any[]

  ngOnInit(): void {
      console.log(this.localStorage.retrieve('request'));
      console.log(this.localStorage.retrieve('request').resTeamObj);
      this.requestObject=this.requestService.getRequest(this.localStorage.retrieve('request').requestId)
      this.rescueTeamObject=this.rescueTeamService.getRescueTeam(this.localStorage.retrieve('request').resTeamObj)
      this.allMessages=this.messageService.getMessageByRequestId(this.localStorage.retrieve('request').requestId);
      this.connect();
  }

  connect(){
      this.websocketService.connectToWebSocket();
  }

  openChatLobby(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.allMessages;
    dialogConfig.autoFocus = true;
    dialogConfig.width="100%";dialogConfig.height="600px";
    dialogConfig.position={top:"100px",left:""}
    this.dialog.open(ChatLobbyComponent,dialogConfig);
  }

  openAllMessages(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.allMessages;
    dialogConfig.autoFocus = true;
    dialogConfig.width="100%";
    dialogConfig.position={top:"100px",left:""}
    this.dialog.open(AllMessagesDialogComponent,dialogConfig);
  }

}
