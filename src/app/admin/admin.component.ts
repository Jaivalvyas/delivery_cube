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
  

  

  constructor() { }



  ngOnInit(): void {
    
  }


}