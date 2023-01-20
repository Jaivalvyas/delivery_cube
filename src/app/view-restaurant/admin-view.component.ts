import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MenuList } from '../model/MenuList';
import { Restaurent } from '../model/Restaurent';
import { AdminService } from '../services/admin.service';
import { AuthserviceService } from '../services/authservice.service';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  restaurents: any

  constructor(private adminService: AdminService, private authService: AuthserviceService, private userService: UserService) { }

  ngOnInit(): void {
    this.adminService.fetchRestaurent().subscribe({
      next: restaurentData => {
        this.restaurents = restaurentData;
        // console.log(restaurentData)
      },
      error: e => {
        alert("Something went wrong try after sometime")
      }
    })
  }

  addFavorite(restaurantId: number) {
    this.adminService.getCurrentRestaurant(restaurantId).subscribe({
      next: restaurent => {
        console.log(restaurent)

        const email = this.authService.getEmail()

        this.userService.addRestaurantToFavorite(restaurent, email).subscribe({
          next(data) {
            alert("Restaurent is added to Favorites")
          }
          ,
          error() { alert("Something went wrong") }
        })

      }
    })


  }

}

