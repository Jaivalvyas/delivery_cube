import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  panelOpenState = false;
  Data :any 
  date=new Date().toLocaleString()
  constructor(private userService:UserService, private authServ:AuthserviceService) {
  }
  ngOnInit(): void {
    const email = this.authServ.getEmail();
    this.userService.getCheckOutHistory(email).subscribe(
      (response) => {
        this.Data = response;
        console.log(this.Data);
      });
  }
}