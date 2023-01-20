import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  restaurents: any


  constructor(private adminService: AdminService, private router: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.adminService.fetchRestaurent().subscribe({
      next: restaurentData => {
        this.restaurents = restaurentData;

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

}
