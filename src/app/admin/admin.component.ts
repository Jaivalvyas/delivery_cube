import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from '../model/Login';
import { LoginService } from '../services/login.service';
// import jwt_decode from 'jwt-decode';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: User[]=[];

  login:Login={};
  respData:any;
  decoded:any;
  getUsername:any;
  roleData:any;
  getUserData:any;
  

  getSuccess:boolean=false;
  

  constructor(private _formBuilder: FormBuilder, private loginService: LoginService,
    private registerService:RegistrationService, private route:Router, private authservice:AuthserviceService) { }

  get email() { return this.loginForm.get("email"); }
  get password() { return this.loginForm.get("password"); }

  loginForm = this._formBuilder.group({    
    email: ['', [Validators.required, Validators.pattern("([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com")]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    })
  ngOnInit(): void {
    
  }

  
show: boolean= false;

submit(logInForm:any): void {
  this.loginService.login(logInForm.value).subscribe(
    (response: any) => {
      console.log(response);
      this.authservice.setRole(response.user.role);
      this.authservice.setToken(response.jwtToken);

      this.authservice.setToken(response.jwtToken);
      console.log(response.user.role);

      const role = response.user.role;
      if (role === "Admin") {
        console.log(role);
        
        this.route.navigateByUrl("/restaurant");
      } else{
        console.log(role);
        alert("Go to user login page");
        // this.route.navigate(["/user"]);
      }
    },
    (error) => {
      alert("please enter valid Credentials");
    }
  )

}
}