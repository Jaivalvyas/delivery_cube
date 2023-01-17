import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoginSuccess:boolean=false;

  constructor(private http:HttpClient) { }

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
}
