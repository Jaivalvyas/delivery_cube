import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  restaurents:any

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.fetchRestaurent().subscribe({
      next:restaurentData=>{
        this.restaurents=restaurentData;
        console.log(restaurentData)
      },
      error:e=>{
        alert("Something went wrong try after sometime")
      }
    })
  }

}
