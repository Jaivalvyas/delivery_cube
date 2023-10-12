import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myForm: any;

  constructor() { }

  ngOnInit(): void {
  }
  userEmail: string = ''; // Initialize userEmail with an empty string

  subscribe() {
    // Handle the subscription logic here (e.g., send data to a server).

    // Display an alert with the user's input email
    alert(`Thank you for subscribing with email: ${this.userEmail}`);
    
    // You can also reset the form after submission if needed
    // this.myForm.reset(); // Assuming you have a form instance called myForm
  }
}
