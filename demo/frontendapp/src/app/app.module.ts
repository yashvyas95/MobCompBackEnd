import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {MatGridListModule} from '@angular/material/grid-list';
//import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LogoutComponent } from './logout/logout.component';
import { HomePageComponent } from './home-page/home-page.component';
//import { WebsocketService} from '../app/services/websocket.service';
import {ChatService} from '../app/services/chat-service.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminComponent } from './admin/admin.component';
import { TokenInterceptor } from './services/token-interceptor';
//import { HttpInterceptorService } from './services/http-interceptor.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import { SignupComponent } from './signup/signup.component';
import { RescueTeamComponent } from './rescue-team/rescue-team.component';
import { HeaderComponent } from './header/header.component';
import { ChatLobbyComponent } from '../app/chat-lobby/chat-lobby.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
//import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RescueTeamDialogComponent} from '../app/rescue-team-dialog/rescue-team-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { RescueTeamInfoDialogComponent } from './rescue-team-info-dialog/rescue-team-info-dialog.component';
import { EmployesInfoDialogComponent } from './employes-info-dialog/employes-info-dialog.component';
import { RescueTeamInfoAdminDialogComponent } from './rescue-team-info-admin-dialog/rescue-team-info-admin-dialog.component';
import { CommunicationLobbyComponent } from './communication-lobby/communication-lobby.component';
import { CreateRescueTeamDialogComponent } from './create-rescue-team-dialog/create-rescue-team-dialog.component';
import { MessageToVictimComponent } from './message-to-victim/message-to-victim.component';
import { MessageToUserDialogComponent } from './message-to-user-dialog/message-to-user-dialog.component';
import { DepartmentsComponent } from './departments/departments.component';
import { RequestLandingComponent } from './request-landing/request-landing.component';
import { RequestLoginComponent } from './request-login/request-login.component';
import { AllMessagesDialogComponent } from './all-messages-dialog/all-messages-dialog.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AssignRescueTeamDialogAdminComponent } from './assign-rescue-team-dialog-admin/assign-rescue-team-dialog-admin.component';
import { CreateDepartmentAdminComponent } from './create-department-admin/create-department-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    LoginComponent,
    UserComponent,
    LogoutComponent,
    HomePageComponent,
    AdminComponent,
    SignupComponent,
    RescueTeamComponent,
    HeaderComponent,
    ChatLobbyComponent,
    SidebarComponent,
    ToolbarComponent,
    RescueTeamDialogComponent,
    RescueTeamInfoDialogComponent,
    EmployesInfoDialogComponent,
    RescueTeamInfoAdminDialogComponent,
    CommunicationLobbyComponent,
    CreateRescueTeamDialogComponent,
    MessageToVictimComponent,
    MessageToUserDialogComponent,
    DepartmentsComponent,
    RequestLandingComponent,
    RequestLoginComponent,
    AllMessagesDialogComponent,
    AssignRescueTeamDialogAdminComponent,
    CreateDepartmentAdminComponent
  ],
  entryComponents: [ RescueTeamDialogComponent ,RescueTeamInfoAdminDialogComponent,EmployesInfoDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatTableModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    NgxWebstorageModule.forRoot(),
    ToastrModule.forRoot(),
    MatSidenavModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
