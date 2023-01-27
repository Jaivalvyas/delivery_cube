import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuList } from '../model/MenuList';
import { Order } from '../model/Order';
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
  totalValue: number = 0;
  public products: any = [];
  public grandTotal !: number;
  orderForm!: FormGroup
  orderObject:any

  constructor(private cartService: UserService, private authServices: AuthserviceService, private _snackBar: MatSnackBar) { }

  email2 = this.authServices.getEmail();


  ngOnInit(): void {
    this.cartService.getCart(this.email2)
      .subscribe((res: any) => {
        this.products = res;
        console.log(this.products)
      });


    this.orderForm = new FormGroup({
      restaurantId: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      menuList: new FormControl(
        {
          foodItemName: new FormControl('', [Validators.required]),
          cuisine: new FormControl('', [Validators.required]),
          price: new FormControl('', [Validators.required]),
          quantity: new FormControl('', [Validators.required]),
        }
      ),
      totalPrice: new FormControl('', [Validators.required]),
    }

    );
  }


  get restaurantId() {
    return this.orderForm.get('restaurantId');
  }
  get email() {
    return this.orderForm.get('email');
  }
  get menuList() {
    return this.orderForm.get('email');
  }
  get totalPrice() {
    return this.orderForm.get('totalPrice');
  }


  removeItem(foodItemName: any) {
    console.log(this.email)
    console.log(foodItemName)
    this.cartService.deleteMenuFromCart(this.email2, foodItemName).subscribe((response: any) => {
      console.log(response);
      alert("Menu got Deleted")
    })
  }

  emptycart() { }

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


  public grandGrandTotal(): number {
    let total: number = 0;
    for (let product of this.products) {
      total += (product.quantity * product.price);

    }
    return total;
  }

  order: any;





  orderCart() {
    this.cartService.postOrder(this.order).subscribe({

      next(x) { alert("order is  placed") },
      error(errormsg) { },
    })


    this._snackBar.open('Congrats!!You order has been placed!!', 'success', {
      // duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });

  }

}
