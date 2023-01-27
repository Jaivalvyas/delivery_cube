import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthserviceService } from '../services/authservice.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  email:any
  postResponse: any;
  dbImage: any;
  userData:any;
  constructor(private httpClient:HttpClient, private authServ:AuthserviceService,private registrationService:RegistrationService) { }

  ngOnInit(): void {
    this.email = this.authServ.getEmail();
    this.httpClient.get('http://localhost:9000/api/v2/get/image/info/' + this.email).subscribe(
    res => {
      this.postResponse = res;          
      this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
    });

    this.registrationService.getProfile(this.email).subscribe((result) => {
      this.userData = result;
      console.log(this.userData);
      console.log(result);
    });
  
  }

}
