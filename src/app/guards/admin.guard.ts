import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authServ:AuthserviceService,private router:Router){}
  
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authServ.isLoggedIn()&& this.authServ.getRole()==="Admin"){
        return true;
      }
      else{
        this.router.navigateByUrl("home")
        alert("please log in to  access the page")
        return false;
      }
  }
  
}
