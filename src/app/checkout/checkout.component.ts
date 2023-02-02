import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { config } from 'rxjs';
import { Billing } from '../model/Billing';
import { CheckOutDetails } from '../model/CheckOutDetails';
import { User } from '../model/User';
import { OrderPlacedNotificationComponent } from '../order-placed-notification/order-placed-notification.component';
import { AuthserviceService } from '../services/authservice.service';
import { RegistrationService } from '../services/registration.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userData: any
  order: any;
  curInvoice: any;
  paymentDetails:any;
  suppliers: any;
  cardDetails: Billing = {
    nameOnCard: '',
    cardNumber: 0,
    expiryMonth: '',
    expiryYear: '',
    cvv: 0
  };
  checkOut = new CheckOutDetails();
  checkOutData: any;
  constructor(readonly _snackBar: MatSnackBar, private _formBuilder: FormBuilder, private userDetails: RegistrationService, private authService: AuthserviceService, private orderDetails: UserService) {
  }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    nameOnCard: ['', [Validators.required]],
    cardNumber: ['', [Validators.required]],
    expiryMonth: ['', [Validators.required]],
    expiryYear: ['', [Validators.required]],
    cvv: ['', [Validators.required]],  });
 
  // NameOnCard: string = '';
  // cardNumber!: number;
  // expiryMonth: string = '';
  // expiryYear: string = '';
  // CVV!: number;
  checkoutNumber = Math.floor(Math.random() * 101);

  

  isLinear = false;


  ngOnInit(): void {
    const email = this.authService.getEmail();

    this.userDetails.fetchUserById(email).subscribe(
      (response) => {
        this.userData = response;
        console.log(this.userData);
      });

    this.orderDetails.getOrder(email).subscribe(
      (response) => {
        this.order = response;
        console.log(this.order);
      });


       this.paymentDetails = this._formBuilder.group({
       
      });
    




  }



  doCheckOut() {
    console.log(this.checkoutNumber)
    console.log(this.cardDetails);
    this.checkOut.orderId = this.checkoutNumber
    this.checkOut.billingDetails = this.cardDetails
    this.checkOut.user = this.userData
    this.checkOut.order = this.order;
    console.log(this.checkOut)
    this.orderDetails.postCheckOut(this.checkOut).subscribe({
      next() { },
      // complete() { "Order Placed" },
      error() { alert("Something goes wrong") }
    });

    this._snackBar.open('Thank you! Your order is confirmed.!! ', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

}
