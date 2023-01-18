import { Component, OnInit } from '@angular/core';
import { MenuList } from '../model/MenuList';
import { Restaurent } from '../model/Restaurent';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
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
