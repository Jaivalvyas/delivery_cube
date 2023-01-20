import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: HttpClient) { }


  addRestaurantToFavorite(restaurent: any, email: string) {
    return this.HttpClient.post("http://localhost:9000/api/v3/favorite/addRestaurant/" + email, restaurent)
  }


  URL: string = "http://localhost:9000/api/v3/favorite/restaurants"

  getFavoritesRestaurants(email: string) {
    return this.HttpClient.get(`${this.URL}/${email}`);
  }

  deleteRestaurantFromFavorites(email:string,restaurantId:number){
    return this.HttpClient.delete("http://localhost:9000/api/v3/restaurantList/"+email+"/"+restaurantId);
  }

}
