import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-favorite',
  templateUrl: './view-favorite.component.html',
  styleUrls: ['./view-favorite.component.css']
})
export class ViewFavoriteComponent implements OnInit {

  restaurents: any;
   email=this.authServ.getEmail()

  constructor(private viewFav:UserService, private rout:Router, private authServ:AuthserviceService,private _snackBar:MatSnackBar) { }
  ngOnInit(): void {
      this.viewFav.getFavoritesRestaurants(this.email).subscribe((result) => {
        this.restaurents = result;
        console.log(this.restaurents)
      });
  }

  deleteFavRestaurant(restaurantId:number){
    this.viewFav.deleteRestaurantFromFavorites(this.email, restaurantId).subscribe({
      next(x) { },

      error(errormsg) { alert("something Went Wrong") },
    });
    this._snackBar.open('You have deleted  the favorite restaurant!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })

  }

}
