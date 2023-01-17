import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Login } from '../model/Login';
import { LoginService } from '../services/login.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login:Login={};
  respData:any;
  decoded:any;
  getUsername:any;

  getSuccess:boolean=false;

  constructor(private _formBuilder: FormBuilder, private loginService: LoginService) { }

  get email() { return this.loginForm.get("email"); }
  get password() { return this.loginForm.get("password"); }

  loginForm = this._formBuilder.group({    
    email: ['', [Validators.required, Validators.pattern("([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com")]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    })
  ngOnInit(): void {
  }


show: boolean= false;
submit(logInForm:any){
  this.loginService.login(this.loginForm.value).subscribe(
    (response)=>{
      this.respData=response;
      console.log(this.respData.token);
      const token = this.respData.token;
      this.decoded = jwt_decode(token);
      console.log(this.decoded);
      
      this.getUsername = this.decoded.sub;
      console.log(this.getUsername);
      sessionStorage.setItem('username',this.respData.username);
      localStorage.setItem('token',this.respData.token);
      alert("login successful")        
      this.getSuccess = true;
      // this.router.navigateByUrl('/view')
    },
    (error=>{alert("Invalid Credentials")})
  )
this.clear();
}
clear(){
this.login.email ="";
this.login.password = "";
this.show = true;
}
}


