import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private HttpClient: HttpClient) { }


  addRestaurantToFavorite(restaurent: any, email: string) {
    return this.HttpClient.post("http://localhost:9000/api/v3/favorite/addRestaurant/" + email, restaurent)
  }


  addMenuToCart(menu: any, email: string) {
    return this.HttpClient.post("http://localhost:9000/api/v3/cart/addMenu/"+email, menu)
  }

  


  URL: string = "http://localhost:9000/api/v3/favorite/restaurants"
  URL2: string = "http://localhost:9000/api/v3/cart/menus"

  getFavoritesRestaurants(email: string) {
    return this.HttpClient.get(`${this.URL}/${email}`);
  }

  getCart(email: string) {
    return this.HttpClient.get(`${this.URL2}/${email}`);
  }

  deleteRestaurantFromFavorites(email:string,restaurantId:number){
    return this.HttpClient.delete("http://localhost:9000/api/v3/restaurantList/"+email+"/"+restaurantId);
  }


  deleteMenuFromCart(email:string,foodItemName:string){
    return this.HttpClient.delete("http://localhost:9000/api/v3/menuList/"+email+"/"+foodItemName);
  }
  

  // http://localhost:9000/api/v3/order/shubham@gmail.com
  // http://localhost:9000/api/v3/saveOrder
 
  postOrder(order:Order) {
    return this.HttpClient.post("http://localhost:9000/api/v3/saveOrder",order)
  }
  

}
