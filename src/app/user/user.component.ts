import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  constructor(private httpClient: HttpClient, private regS:RegistrationService, private authServ:AuthserviceService) { }

  ngOnInit(): void {
  }
}