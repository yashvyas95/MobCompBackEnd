import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { RescueTeam } from '../model/RescueTeam';
//import {  } from '../services/authentication.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RescueTeamDialogComponent } from '../rescue-team-dialog/rescue-team-dialog.component';
import { RescueTeamInfoDialogComponent } from '../rescue-team-info-dialog/rescue-team-info-dialog.component';
import { EmployesInfoDialogComponent } from "../employes-info-dialog/employes-info-dialog.component";
import { AllMessagesDialogComponent } from '../all-messages-dialog/all-messages-dialog.component';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService} from '../services/message.service';
import { ChatLobbyComponent} from '../chat-lobby/chat-lobby.component';
import { AuthService } from '../services/auth.service';
import { RescueTeamService} from '../services/rescue-team.service';
import { RequestService } from '../services/request.service';
import { User } from '../model/User';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  rescueTeamId = 0;
  password = 'user';
  user: any;
  username:string='';
  rescueTeam: any;
  requestAssignedToUser: any;
  AllUsers: any;
  newMessages: any;
  requestDialogOpen = false;
  rescueInfoDialogOpen = false;
  employeeInfoDialogOpen = false;
  active_request: any
  ws: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = ['sender', 'content'];
  displayedColumnsForRequest = ['requestId', 'name', 'location','resTeamObj'];
  allMessages: any;


  constructor(private websocketService:WebSocketService,private requestService: RequestService,private rescueTeamService : RescueTeamService ,private authService:AuthService, private messageService:MessageService,private router: Router, private localStorage: LocalStorageService, private http: HttpClient, public dialog: MatDialog) {
    
  }

  ngOnInit(): void {

    this.username=this.localStorage.retrieve('username');
    console.log(this.username);
    this.connect();
    this.newMessages = [];
    this.authService.getUser(this.username).subscribe(
      (response:any)=>{
        this.user=response
        this.rescueTeamService.getRescueTeam(response.rescueTeamId).subscribe(
          (response)=>this.rescueTeam=[response],
        );
        this.rescueTeamService.getRequestFromRequestId(response.rescueTeamId).subscribe(
          (response)=>this.requestAssignedToUser=response,
        );
        this.requestService.getUserActiveRequest(response.rescueTeamId).subscribe(
          (response)=>this.active_request=response,
        );    
        this.messageService.getMessageByUserId(response.userId).subscribe(
          (response)=>{this.allMessages=response;}, 
        );
      },
      (error)=>{console.log(error)}
    );
    this.authService.getAllUser().subscribe(
      (response)=>this.AllUsers=response,
    );
    this.websocketService.connectToWebSocket();
  }


  openRescueDialog(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.requestAssignedToUser;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "50%";
    dialogConfig.width = "60%";
    dialogConfig.position = { top: "100px", left: "" }
    if (!this.requestDialogOpen) { this.dialog.open(RescueTeamDialogComponent, dialogConfig); this.requestDialogOpen = true; }
    else { this.dialog.closeAll(); this.requestDialogOpen = false; }
  }

  openRescueTeamInfo(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.rescueTeam;
    dialogConfig.autoFocus = true;
    dialogConfig.position = { top: "100px", left: "" }
    if (!this.rescueInfoDialogOpen) { this.dialog.open(RescueTeamInfoDialogComponent, dialogConfig); this.rescueInfoDialogOpen = true; }
    else { this.dialog.closeAll(); this.rescueInfoDialogOpen = false; }
  }

  openEmployeesInfoDialog(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.AllUsers;
    dialogConfig.autoFocus = true;
    dialogConfig.position = { top: "100px", left: "" };
    if (!this.employeeInfoDialogOpen) { this.dialog.open(EmployesInfoDialogComponent, dialogConfig); this.employeeInfoDialogOpen = true; }
    else { this.dialog.closeAll(); this.employeeInfoDialogOpen = false; }
  }

  openallMessageDialog(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.allMessages;
    dialogConfig.autoFocus = true;
    dialogConfig.position = { top: "100px", left: "" };
    if (!this.employeeInfoDialogOpen) { this.dialog.open(AllMessagesDialogComponent, dialogConfig); this.employeeInfoDialogOpen = true; }
    else { this.dialog.closeAll(); this.employeeInfoDialogOpen = false; }
  }



  openChatLobby() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.allMessages;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    dialogConfig.position = { top: "100px", left: "" }
    this.dialog.open(ChatLobbyComponent, dialogConfig);
  }


  connect() {
    let socket = new SockJS("http://localhost:8080/socket");
    this.ws = Stomp.Stomp.over(socket);
    this.ws.connect({}, (frame: any) => {
      this.ws.subscribe("/topic/chat", (message: { body: string; }) => {
        var MessageReceived = JSON.parse(message.body);
        this.newMessages.push(MessageReceived);
        console.log("ALL MESSAGES" + MessageReceived.content);
      });

    });


  }
}
