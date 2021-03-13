import { Component, OnInit , NgZone} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Request} from '../model/Request';
import {RequestForSending} from '../model/RequestForSending';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink} from '@angular/router';
import { trigger } from '@angular/animations';
//import { AuthenticationService } from '../services/authentication.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { VictimServicesService } from '../services/victim-services.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {


  isHidden=true;
  request: Request = new Request(0,false,false,false);
  //requestSending: RequestForSending = new RequestForSending("","","",0,);
  invalid = true;
  requestForm = new FormGroup({
    name:new FormControl(),
    people:new FormControl(),
    fire:new FormControl(),
    medical:new FormControl(),
    crime:new FormControl(),
    location:new FormControl(),
  })
  message="THIS IS MESSAGE";
 // username='user';
 // password='user';
  invalidLogin = false;
  chatService: any;

  constructor(private ngZone: NgZone,private localStorage: LocalStorageService,private vicService: VictimServicesService,private FormBuilder:FormBuilder, private http: HttpClient, private router : Router) { 
    
  }

  ngOnInit(): void {
    //this.loginService.authenticate("user","user");
  }

  onSubmit(requestData:any){
    let nature:any;
    if(requestData.crime){
      if(requestData.fire){
        if(requestData.medical){
          nature=6;
          }
          else{
            nature=3;
          }
      }
      else if(requestData.medical){
        nature=5;
      }
      else{
        nature=0;
      }
    }
    else if(requestData.fire){
        if(requestData.medical){
            nature=4;
        } 
        else{
          nature=1;
        }
    }
    else if(requestData.medical){
        nature=2;
    }
    console.log(requestData.name);
    console.log("nature"+requestData.nature);
    console.log("NATURE CALCULATED"+nature);
    var rSending = new RequestForSending(requestData.name,requestData.people,nature,requestData.location,0,true);
    //console.log("NATURE CALCULATED2"+JSON.stringify(rSending));
    this.vicService.addRequest(rSending).subscribe(
      (data:any)=>{
        console.log(data);
        this.localStorage.store('request',data);
        this.ngZone.run(() => this.router.navigateByUrl('requestLanding'))

      },
      (error)=>console.log(error)
    );
    
  }
  redirectToLobby() : void {
    this.router.navigate(['lobby']);
}
  returnData(response : any){
      if(response.id!=null){
          this.router.navigate(['/lobby',response.id]);
      }
     console.log(response.id);
  }


showRequestForm():void{
     // this.loginService.authenticate("user","user");
      if(this.isHidden==true){
          this.isHidden=false;
      }
      else{this.isHidden=true;}
}

  redirectToLogin() : void {
    this.router.navigate(['./login']);
}

sendMessage() {
  this.chatService.sendMessage(this.message);
  this.message = '';
}
}

