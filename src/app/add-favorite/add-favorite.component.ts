import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.css']
})
export class AddFavoriteComponent implements OnInit {
  restaurentForm!: FormGroup
  restaurents: any;
  constructor(private router:ActivatedRoute,private addFav:AdminService, private rout:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['restaurantId']);
    this.addFav.getCurrentRestaurant(this.router.snapshot.params['restaurantId'])
      .subscribe((result) => {
        this.restaurents = result;
        console.log(this.restaurents)
      });
  }

}
