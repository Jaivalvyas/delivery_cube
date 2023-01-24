import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { AuthserviceService } from '../services/authservice.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  restaurents: any;
  menuList:any;


  constructor(private adminService: AdminService, private router: ActivatedRoute, private _snackBar: MatSnackBar, private userService: UserService, private authService: AuthserviceService) { }
  ngOnInit(): void {
    this.adminService.getCurrentRestaurant(this.restId).subscribe({
      next: restaurentData => {
        this.restaurents = restaurentData;
        this.menuList=this.restaurents.menu

        console.log(restaurentData)

      },
      error: e => {
        alert("Something went wrong try after sometime")
      }
    });
  }


  restId = this.router.snapshot.params['restaurantId'];
  deletemenu(foodItemName: string) {
    console.log(this.restId);
    this.adminService.deleteMenu(this.restId, foodItemName).subscribe({
      next(x) { },

      error(errormsg) { alert("something Went Wrong") },
    });
    this._snackBar.open('You have deleted  the menu!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
  }

  email = this.authService.getEmail();

    

        

  addToCart(menu:any) {
    console.log(menu);
    console.log(this.email);
    this.userService.addMenuToCart(menu,this.email).subscribe({
      next(x)
      {alert("menu  is  Added")},
      error(errormsg){},
    })
   
    
    this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }


  }
  

  


