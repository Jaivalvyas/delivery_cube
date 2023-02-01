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
    return this.HttpClient.post("http://localhost:9000/api/v3/cart/addMenu/" + email, menu)
  }




  URL: string = "http://localhost:9000/api/v3/favorite/restaurants"
  URL2: string = "http://localhost:9000/api/v3/cart/menus"

  getFavoritesRestaurants(email: string) {
    return this.HttpClient.get(`${this.URL}/${email}`);
  }

  getCart(email: string) {
    return this.HttpClient.get(`${this.URL2}/${email}`);
  }

  deleteRestaurantFromFavorites(email: string, restaurantId: number) {
    return this.HttpClient.delete("http://localhost:9000/api/v3/restaurantList/" + email + "/" + restaurantId);
  }


  deleteMenuFromCart(email: string, foodItemName: string) {
    return this.HttpClient.delete("http://localhost:9000/api/v3/menuList/" + email + "/" + foodItemName);
  }


  deleteCart(email: string) {
    return this.HttpClient.delete("http://localhost:9000/api/v3/cart/" + email);
  }




  postOrder(order: Order) {
    return this.HttpClient.post("http://localhost:9000/api/v3/saveOrder", order)
  }
  getOrder(email: string) {
    return this.HttpClient.get("http://localhost:9000/api/v3/Order/" + email)
  }

  postCheckOut(CheckOutDetails: any) {
    return this.HttpClient.post(" http://localhost:9000/api/v3/saveCheckOutDetails", CheckOutDetails)
  }

  getRestaurantListBasedOnCuisine(cuisine: any) {
    return this.HttpClient.get("http://localhost:9000/api/v2/getbycuisine/" +cuisine)
  }
  getCheckOutHistory(email: string) {
    return this.HttpClient.get("  http://localhost:9000/api/v3/getCheckoutDetails/" + email)
  }

getCurrentcheckoutDetails(orderId:number){
  return this.HttpClient.get("http://localhost:9000/api/v3/getCurrentCheckoutDetail/" + orderId)

}
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([])

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }


  addToCart(product: any) {


    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList);
    this.getTotalPrice();
  }

    getTotalPrice(){
      let grandtotal=0;
      this.cartItemList.map((a:any)=>{
        grandtotal+=a.total;
      });
    }
}
