import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  user: User[] = [];
  imageFormData: any;

  constructor(private http: HttpClient) { }

  saveUser(user: User) {
    return this.http.post("http://localhost:9000/api/v2/register", user)
  }

  fetchUserById(email: String): Observable<Array<User>> {
    return this.http.get<Array<User>>("http://localhost:9000/api/v2/userbyid" + "/" + email)
  }


  fetchAllUser(): Observable<Array<User>> {
    return this.http.get<Array<User>>("http://localhost:9000/api/v2/fetchUser")
  }

  // fetchUserById(email: String): Observable<User[]> {
  //   return this.http.get<User>("http://localhost:9000/api/v2/userbyid"+"/"+email)
  // .pipe(map(response => response.role));
  // }
  updateUser(email: string, data: any) {
    return this.http.put("http://localhost:9000/api/v2/updateUser/" + email, data);




  }
}
