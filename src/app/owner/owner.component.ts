import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { AuthserviceService } from '../services/authservice.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  constructor(private userService:UserService, private authServ:AuthserviceService) {
  }
  ngOnInit(): void {
    this.userService.getCheckOutHistory(this.authServ.getEmail()).subscribe(response=>{
      console.log(response)
    })
  }

}
 

