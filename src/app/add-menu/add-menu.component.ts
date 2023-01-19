import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Restaurent } from '../model/Restaurent';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menuList!: FormGroup
  restaurantObject: any;

  get foodItemName() {
    return this.menuList.get('foodItemName');
  }
  get cuisine() {
    return this.menuList.get('cuisine');
  }
  get price() {
    return this.menuList.get('price');
  }
  

  constructor(private router: ActivatedRoute, private addmenu: AdminService, private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    
      this.menuList= new FormGroup({
        foodItemName:new FormControl('',[Validators.required]),
        cuisine:new FormControl('',[Validators.required]),
        price:new FormControl('',[Validators.required]),
      }),

    console.log(this.router.snapshot.params['restaurantId']);
   
  }

  onSubmit(): void {
    const restaurantIdToBePassed=this.router.snapshot.params['restaurantId'];
    
    console.log(this.menuList.value)
    this.addmenu.addMenuToRestaurant(this.menuList.value, restaurantIdToBePassed).subscribe({
      next(x) { },
      error(errormsg) {alert("something Went Wrong")},
      
    })
    this._snackBar.open('You have added  the menu!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })

  }
}
