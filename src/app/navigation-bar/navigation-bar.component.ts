import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
orderCounts: number=0;
email=this.authServ.getEmail();

  openDialog() {
    const dialogRef = this.dialog.open(RegistrationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAdminDialog(){
    const dialogRef = this.dialog.open(AdminComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog,private authServ:AuthserviceService,private router:Router, private logInServ:LoginService ) {}
  orderCounter:number=0;

  ngOnInit(): void {
    // this.orderCounter=this.addCart.products.length()
    

    
  }



  public isLoggedIn(){
    return this.authServ.isLoggedIn()
  }

  public logOut(){
    this.authServ.clear();
    this.router.navigate(["/home"])
  }

 isAdmin:boolean=this.logInServ.roleMatch("Admin");
 isUser:boolean=this.logInServ.roleMatch("User");


 
 
 

}
