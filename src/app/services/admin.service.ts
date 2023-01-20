import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurent } from '../model/Restaurent';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  restaurent: Restaurent[] = []

  constructor(private HttpClient: HttpClient) { }
  fetchRestaurent(): Observable<Array<Restaurent>> {
    return this.HttpClient.get<Array<Restaurent>>("http://localhost:9000/api/v2/fetchAll")
  }

  storeData(restaurent: Restaurent) {
    return this.HttpClient.post("http://localhost:9000/api/v2/saveRestaurant", restaurent);
  }

  URL: string = "http://localhost:9000/api/v2/restaurantbyid"
  UpdateURL = "http://localhost:9000/api/v2/updateRestaurant"

  getCurrentRestaurant(restaurantId: number) {
    return this.HttpClient.get(`${this.URL}/${restaurantId}`);
  }

  updateRastaurant(restaurantId: number, data: any) {
    return this.HttpClient.put(`${this.UpdateURL}/${restaurantId}`, data);
  }

  addMenuToRestaurant(menu:any,restaurantId:number){
    return this.HttpClient.post("http://localhost:9000/api/v2/restaurant/addMenu/"+restaurantId,menu)
  }

  deleteMenu(restaurantId:number,foodItemName:string){
    return this.HttpClient.delete("http://localhost:9000/api/v2//menuList/"+restaurantId+"/"+foodItemName);
  }
}
