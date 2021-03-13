import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginRequestPayload } from './login-request.payload';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AssertNotNull } from '@angular/compiler';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  registerSuccessMessage='';
  isError=false;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService, private localStorage: LocalStorageService) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    

    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.registered !== undefined && params.registered === 'true') {
          this.toastr.success('Signup Successful');
          this.registerSuccessMessage = 'Please Check your inbox for activation email '
            + 'activate your account before you Login!';
        }
      });
  }

  login() {
    this.loginRequestPayload.username = this.loginForm.get('username')!.value;
    this.loginRequestPayload.password = this.loginForm.get('password')!.value;
    console.log(this.loginForm.get('username')!.value);
    console.log(this.loginForm.get('password')!.value);
    let responseData: any;
    let errorData:any
    this.authService.login(this.loginRequestPayload).subscribe(
      (response)=>{
          if(response){
            if(this.localStorage.retrieve('role')=="ADMIN" || (this.loginForm.get('username')!.value=="admin" && this.loginForm.get('password')!.value=="admin")){
              console.log("INSIDE");
              this.router.navigate(['admin']);
            }
            else{
              this.router.navigate(['home']);
            }
          }
          else{
            this.isError = true;
            console.log("LOGIN ERROR");
            throwError(errorData);
            this.router.navigateByUrl('/login');
          }
      },
      (error)=>errorData=error
    );
    
  }

}
