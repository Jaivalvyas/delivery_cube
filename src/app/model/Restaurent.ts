import { MenuList } from "./MenuList";

export class Restaurent {
    restaurantId?: number
    restaurantName?: string
    rating?: number
    // menuList?: Array<MenuList>;
     menuList:[foodItemName:string,cuisine:string,price:number][]
    phone?: Number
    location?: string

    constructor() {
        this.restaurantId = 0;
        this.restaurantName = "";
        this.rating = 0.0;
        this.menuList = [];
        this.phone = 0;
        this.location = "";

    }
}