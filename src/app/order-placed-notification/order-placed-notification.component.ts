import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order-placed-notification',
  templateUrl: './order-placed-notification.component.html',
  styleUrls: ['./order-placed-notification.component.css']
})
export class OrderPlacedNotificationComponent implements OnInit {
  checkoutData:any;
   date=new Date().toLocaleString()
  constructor(private userService: UserService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.router.snapshot.params['orderId']);

    this.userService.getCurrentcheckoutDetails(this.router.snapshot.params['orderId'])
      .subscribe((result) => {
        this.checkoutData = result;
        console.log(this.checkoutData)
      });

  }
loadData(){
  window.location.reload();
}
}
