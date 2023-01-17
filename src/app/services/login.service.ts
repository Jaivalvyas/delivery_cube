import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoginSuccess:boolean=false;

  constructor(private http:HttpClient,private authServ:AuthserviceService) { }

  login(data: any):Observable<any>{
    this.isLoginSuccess = true;
    return this.http.post(`http://localhost:9000/api/v1/login`,data);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  loginAdmin(data: any):Observable<any>{
    return this.http.post(`http://localhost:8082/api/v1/adminlogin`,data);
  }


  public roleMatch(allowedRole: any): any {
    let isMatch = false;
    const role = this.authServ.getRole();
    if (role != null && role) {
      if (role === allowedRole) {
        isMatch = true;
        return isMatch;
      } else {
        return isMatch;
      }
    }
  }
}
