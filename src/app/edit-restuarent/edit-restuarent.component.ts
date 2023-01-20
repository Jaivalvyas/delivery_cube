import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Restaurent } from '../model/Restaurent';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-restuarent',
  templateUrl: './edit-restuarent.component.html',
  styleUrls: ['./edit-restuarent.component.css']
})
export class EditRestuarentComponent implements OnInit {
  restaurentForm!: FormGroup
  restaurantObject: any;

  get restaurantId() {
    return this.restaurentForm.get('restaurantId');
  }
  get restaurantName() {
    return this.restaurentForm.get('restaurantName');
  }
  get location() {
    return this.restaurentForm.get('location');
  }
  get rating() {
    return this.restaurentForm.get('rating');
  }

  constructor(private router: ActivatedRoute, private editServ: AdminService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.restaurentForm = new FormGroup({

      restaurantId: new FormControl('', [Validators.required]),
      restaurantName: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required]),
    }

    );

    console.log(this.router.snapshot.params['restaurantId']);
    this.editServ.getCurrentRestaurant(this.router.snapshot.params['restaurantId'])
      .subscribe((result) => {
        this.restaurantObject = result;
        console.log(this.restaurantObject)
      });
  }
  onSubmit(): void {
    this.editServ.updateRastaurant(this.router.snapshot.params['restaurantId'], this.restaurantObject).subscribe({
      next(x) { },
      error(errormsg) { },
    })


    this._snackBar.open('You have edited  the vehile!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

}
