import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Login } from '../model/Login';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { AuthserviceService } from '../services/authservice.service';
import { LoginService } from '../services/login.service';
// import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;


  login: Login = {};
  respData: any;
  decoded: any;
  getUsername: any;

  getSuccess: boolean = false;

  constructor(private _formBuilder: FormBuilder, private loginService: LoginService, private route: Router, private authservice: AuthserviceService,
    private dialogRef: MatDialogRef<NavigationBarComponent>,) { }

  get email() { return this.loginForm.get("email"); }
  get password() { return this.loginForm.get("password"); }

  loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.pattern("([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com")]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
  })
  ngOnInit(): void {
  }


  show: boolean = false;
  submit(logInForm: any): void {
    this.dialogRef.close();
    this.loginService.login(logInForm.value).subscribe(
      (response: any) => {

        console.log(response);
        this.authservice.setRole(response.user.role);
        this.authservice.setToken(response.jwtToken);

        this.authservice.setToken(response.jwtToken);
        console.log(response.user.role);

        this.authservice.setEmail(response.user.email)
        console.log(response.user.email);


        const role = response.user.role;
        if (role === "Admin") {
          console.log(role);

          this.route.navigateByUrl("/admin");
        }
        else if (role === "User") {
          console.log(role);
          this.route.navigate(["/user"]);
        }
      },
      (error) => {
        alert("please enter valid Credentials");
      }
    )

  }
  clear() {
    this.login.email = "";
    this.login.password = "";
    this.show = true;
  }
}


