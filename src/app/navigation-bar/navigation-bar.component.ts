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
import { RegistrationService } from '../services/registration.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  email: any;
  postResponse: any;
  dbImage: any;
  orderCounts: number = 0;
  cartItemsCounter: any;
  cartData: any;

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

  openAdminDialog() {
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

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog,
    private authServ: AuthserviceService, private router: Router, private logInServ: LoginService,
    private httpClient: HttpClient,
    private userService: UserService) { }

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.httpClient.get('http://localhost:9000/api/v2/get/image/info/' + this.authServ.getEmail()).subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        });
    }

    this.userService.getProducts().subscribe(responce => {
      this.cartData = responce;
      this.cartItemsCounter = this.cartData.length

    })
  }



  public isLoggedIn() {
    this.email = this.authServ.getEmail();
    return this.authServ.isLoggedIn()
  }

  public logOut() {

    this.authServ.clear();
    this.router.navigate(["/home"]);
    window.location.reload();

  }

  isAdmin: boolean = this.logInServ.roleMatch("Admin");
  isUser: boolean = this.logInServ.roleMatch("User");



}
