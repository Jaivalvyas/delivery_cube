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
<<<<<<< HEAD
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
=======
import { RegistrationService } from '../services/registration.service';
import { HttpClient } from '@angular/common/http';
>>>>>>> 7fe2893477a9392cc7dc22469d5640c055d7b73c

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  email:any;
  postResponse: any;
  dbImage: any;
  orderCounts: number=0;

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

<<<<<<< HEAD
  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog,private authServ:AuthserviceService,private router:Router, private logInServ:LoginService ) {}
  orderCounter:number=0;

  ngOnInit(): void {
    // this.orderCounter=this.addCart.products.length()
    

    
=======
  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog,
    private authServ:AuthserviceService,private router:Router, private logInServ:LoginService,
     private logIn2:LoginService, private regS:RegistrationService, private httpClient:HttpClient) {}

  ngOnInit(): void {
    if(this.isLoggedIn()){
    this.httpClient.get('http://localhost:9000/api/v2/get/image/info/' + this.authServ.getEmail()).subscribe(
      res => {
        this.postResponse = res;          
        this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
      });
    }
>>>>>>> 7fe2893477a9392cc7dc22469d5640c055d7b73c
  }

 

  public isLoggedIn(){
    this.email = this.authServ.getEmail();
    return this.authServ.isLoggedIn()    
  }

  public logOut(){
    this.authServ.clear();
    this.router.navigate(["/home"])
  }

 isAdmin:boolean=this.logInServ.roleMatch("Admin");
 isUser:boolean=this.logInServ.roleMatch("User");


 
 
 
 

}
