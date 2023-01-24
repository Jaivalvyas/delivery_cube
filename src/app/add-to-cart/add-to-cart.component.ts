import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { AuthserviceService } from '../services/authservice.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  restaurents: any;



  public products: any = [];
  public grandTotal !: number;
  constructor(private cartService: UserService, private authServices: AuthserviceService) { }

  email = this.authServices.getEmail();
  ngOnInit(): void {
    this.cartService.getCart(this.email)
      .subscribe((res: any) => {
        this.products = res;
        console.log(this.products)
        // this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  removeItem(foodItemName:any){
    console.log(this.email)
    console.log(foodItemName)
    this.cartService.deleteMenuFromCart(this.email,foodItemName).subscribe((response:any)=>{
      console.log(response);
    })
  }
  
  emptycart(){}
}
