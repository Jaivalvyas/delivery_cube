import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuList } from '../model/MenuList';
import { Restaurent } from '../model/Restaurent';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-restuarent',
  templateUrl: './add-restuarent.component.html',
  styleUrls: ['./add-restuarent.component.css']
})
export class AddRestuarentComponent implements OnInit {
restaurentForm!:FormGroup
  
  get restaurantId(){
    return this.restaurentForm.get('restaurantId');
  }
  get restaurantName(){
    return this.restaurentForm.get('restaurantName');
  }
  get location(){
    return this.restaurentForm.get('location');
  }
  get rating(){
    return this.restaurentForm.get('rating');
  }
  
  constructor(private adminServ:AdminService, private _snackBar:MatSnackBar ) { }

  ngOnInit(): void {
    this.restaurentForm=new FormGroup({

      restaurantId:new FormControl('',[Validators.required]),
      restaurantName:new FormControl('',[Validators.required]),
      location:new FormControl('',[Validators.required]),
      rating:new FormControl('',[Validators.required]),
    }
  
    );

  }
  onSubmit(): void {
    this.adminServ.storeData(this.restaurentForm.value).subscribe({
      next(x)
      {alert("Restaurent is  Added")},
      error(errormsg){},
    })
   
    
    this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

}
