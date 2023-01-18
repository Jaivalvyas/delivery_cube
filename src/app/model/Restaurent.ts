import { Type } from "@angular/compiler";
import { MenuList } from "./MenuList";

export class Restaurent {
    restaurantId: number
    restaurantName: string
    rating: number
    menuList:MenuList[]
    location: string

    constructor(){
        this.restaurantId=0;
        this.restaurantName=" ";
        this.rating=0;
        this.menuList=[];
        this.location=" ";

    }

   
}