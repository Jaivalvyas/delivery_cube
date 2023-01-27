import { MenuList } from "./MenuList"

export class Order {
    email:string
    restaurantId: number
    menuList:MenuList[]
    totalPrice: number

    constructor(){
        this.restaurantId=0;
        this.email=" ";
        this.menuList=[];
        this.totalPrice=0;

    }

   
}