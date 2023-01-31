import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { AuthserviceService } from '../services/authservice.service';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {
  clicked = false;
  restaurents: any;
  menuList: any;
  disableSelect = new FormControl(false);
  products: any;


  constructor(private logInServ:LoginService, private adminService: AdminService, private router: ActivatedRoute, private _snackBar: MatSnackBar, private userService: UserService, private authService: AuthserviceService) { }



  ngOnInit(): void {
    this.adminService.getCurrentRestaurant(this.restId).subscribe({
      next: restaurentData => {
        this.restaurents = restaurentData;
        this.menuList = this.restaurents.menu

        console.log(restaurentData)

      },
      error: e => {
        alert("Something went wrong try after sometime")
      }
    });


    this.userService.getCart(this.email)
      .subscribe((res: any) => {
        this.products = res;
        console.log(this.products)
      });
  }


  restId = this.router.snapshot.params['restaurantId'];
  deletemenu(foodItemName: string) {
    console.log(this.restId);
    this.adminService.deleteMenu(this.restId, foodItemName).subscribe({
      next(x) { },

      error(errormsg) { alert("something Went Wrong") },
    });
    window.location.reload();
    this._snackBar.open('You have deleted  the menu!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
  }

  email = this.authService.getEmail();





  addToCart(menu: any) {

    let currentMenu = menu.foodItemName;
    console.log(currentMenu)
    let item1 = this.products.find((i: { foodItemName: string; }) => i.foodItemName === menu.foodItemName);

    console.log(item1)

    if (item1 === undefined) {
      this.userService.addToCart(menu);
      console.log(menu)
      this.userService.addMenuToCart(menu, this.email).subscribe({
        next(x) { alert("added to cart") },
        error(errormsg) { alert("something goes wrong") },
      });

      this._snackBar.open('added!!', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
    } else {
      alert("already in cart")
    }

  }



  isAdmin: boolean = this.logInServ.roleMatch("Admin");
  isUser: boolean = this.logInServ.roleMatch("User");


}



