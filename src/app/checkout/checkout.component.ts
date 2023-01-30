import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Billing } from '../model/Billing';
import { CheckOutDetails } from '../model/CheckOutDetails';
import { User } from '../model/User';
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
  suppliers: any;
  cardDetails: Billing = {
    NameOnCard: '',
    cardNumber: 0,
    expiryMonth: '',
    expiryYear: '',
    CVV: 0
  };
  checkOut = new CheckOutDetails();
  constructor(private _formBuilder: FormBuilder, private userDetails: RegistrationService, private authService: AuthserviceService, private orderDetails: UserService) {

  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  paymentDetails = this._formBuilder.group({
    nameOnCard: ['', [Validators.required]],
    cardNumber: ['', [Validators.required]],
    expiryMonth: ['', [Validators.required]],
    expiryYear: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern("[6-9]{1}[0-9]{9,}")]],
    zip: ['', [Validators.required, Validators.pattern("[0-9]{1}[0-9]{5,}")]]
  });

  NameOnCard: string = '';
  cardNumber!: number;
  expiryMonth: string = '';
  expiryYear: string = '';
  CVV!: number;

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

  }

  checkoutNumber = 1
  doCheckOut() {
    console.log(this.cardDetails);
    this.checkOut.orderId = this.checkoutNumber
    this.checkOut.billingDetails=this.cardDetails
    this.checkOut.user=this.userData
    this.checkOut.order = this.order;
    console.log(this.checkOut)
    this.orderDetails.postCheckOut(this.checkOut).subscribe({
      next() { },
      complete() { "Order Placed" },
      error() { alert("Something goes wrong") }


    })
    this.checkoutNumber++;
  }

}
