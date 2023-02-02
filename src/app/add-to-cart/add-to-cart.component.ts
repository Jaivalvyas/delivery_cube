import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from '../model/Order';
import { AuthserviceService } from '../services/authservice.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  restaurents: any;
  totalValue: number = 0;
  public products: any = [];
  public grandTotal !: number;
  orderObject: any
  orderToPlaced = new Order();
  email2: any

  constructor(private cartService: UserService, private authServices: AuthserviceService, private _snackBar: MatSnackBar) {
    this.email2 = this.authServices.getEmail();

  }



  ngOnInit(): void {
    
    this.cartService.getCart(this.email2).subscribe(responce => {
      this.products = responce;
      
    });


  }



  removeItem(foodItemName: any) {
    console.log(this.email2)
    console.log(foodItemName)
    this.cartService.deleteMenuFromCart(this.email2, foodItemName).subscribe((response: any) => {
      console.log(response);
      alert("Menu got Deleted")
    })
    window.location.reload();
  }


  public incrementQuantity(foodItemName: string): void {
    console.log(foodItemName)
    this.products = this.products.map((product: any) => {
      if (product.foodItemName === (foodItemName)) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      }
      return product;
    })
  }

  public decreamentQuantity(foodItemName: string): void {
    console.log(foodItemName)
    this.products = this.products.map((product: any) => {
      if (product.foodItemName === (foodItemName)) {
        return {
          ...product,
          quantity: product.quantity - 1 > 0 ? product.quantity - 1 : 1
        }
      }
      return product;
    })
  }


  public getGrandTotal(): number {
    let total: number = 0;
    for (let product of this.products) {
      total += (product.quantity * product.price);

    }
    return total;
  }



  orderCart() {
    this.orderToPlaced.email = this.email2;

    this.orderToPlaced.menuList = this.products;
    this.orderToPlaced.totalPrice = this.getGrandTotal()
    console.log(this.orderToPlaced);
    this.cartService.postOrder(this.orderToPlaced).subscribe({

      next(x) {  },
      
      error(errormsg) { },
      
    })

    // this.cartService.deleteCart(this.email2).subscribe()

   
  }

}
