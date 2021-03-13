import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { MessageService } from '../services/message.service';
import { RescueTeamService } from '../services/rescue-team.service';
import { RequestService } from '../services/request.service';
import { RescueTeam } from '../model/RescueTeam';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RescueTeamInfoDialogComponent } from '../rescue-team-info-dialog/rescue-team-info-dialog.component';
import { ChatLobbyComponent } from '../chat-lobby/chat-lobby.component'; 
import { AllMessagesDialogComponent } from '../all-messages-dialog/all-messages-dialog.component';

@Component({
  selector: 'app-request-landing',
  templateUrl: './request-landing.component.html',
  styleUrls: ['./request-landing.component.css']
})
export class RequestLandingComponent implements OnInit {

  constructor(private dialog:MatDialog,private http : HttpClient,private requestService: RequestService,private rescueTeamService: RescueTeamService,private localStorage: LocalStorageService, private messageService : MessageService) { 
     
     
  }
  ws:any;
  allMessages:any;
  displayedColumns=['sender','content','timestamp'];
  RequestObj:any;
  displayedColumns2=['requestId','members'];
  rescueTeamData:any;
  allCOllection!:any[]

  ngOnInit(): void {

      console.log(this.localStorage.retrieve('request'));
      this.RequestObj=this.requestService.getRequest(this.localStorage.retrieve('request').requestId);
      let RescueTeamAssignedObj:any;
      console.log(this.localStorage.retrieve('request').resTeamObj);
      let params2 = new HttpParams().append('id',this.localStorage.retrieve('request').resTeamObj);
      this.http.get('http://localhost:8080/api/rescueTeam/getById/',{params:params2}).subscribe(
        (response)=>
        {
          JSON.stringify(response);
          this.rescueTeamData=[response];
          console.log(response);
          console.log("RESCUE TEAM DATA "+this.rescueTeamData)
      },
      (error)=>{console.log(error);}
      );
      // console.log("X"+x);
      //console.log(this.rescueTeamData);
      this.messageService.getMessageByRequestId(this.localStorage.retrieve('request').requestId).subscribe(
        (response)=>{this.allMessages=response;},
        (error)=>{console.log(error);}
        
      );
      console.log(this.allMessages);

      this.connect();
      //this.allMessages=this.messageService.getMessageByUserId(this.localStorage.retrieve('request').requestId);  
      console.log(this.allMessages);
  }


  connect(){
    let socket = new SockJS("http://localhost:8080/socket");
    this.ws = Stomp.Stomp.over(socket);
    let topic = "/topic/chat/"+
    this.ws.connect({}, (frame: any) => {
      this.ws.subscribe("/errors", function(message: { body: string; }) {
        alert("Error " + message.body);
      });
       
      var dataReceived:string='';
      this.ws.subscribe("/topic/chat", (message: { body: string; }) => {
       console.log(JSON.parse(message.body.toString()));
        dataReceived=JSON.stringify(message.body);
        this.allCOllection.push(dataReceived);
        console.log("----------............asdasd."+dataReceived);
      });
      
    });
 
  }

  openChatLobby(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.allMessages;
    dialogConfig.autoFocus = true;
    dialogConfig.width="100%";
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
