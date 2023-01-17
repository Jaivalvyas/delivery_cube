import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurent } from '../model/Restaurent';
import { User } from '../model/User';
import { RestaurantComponent } from '../restaurant/restaurant.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  restaurent: Restaurent[] = []
  
  constructor(private HttpClient: HttpClient) { }
  fetchRestaurent(): Observable<Array<Restaurent>> {
    return this.HttpClient.get<Array<Restaurent>>("http://localhost:9000/api/v2/fetchAll")
  }
}
