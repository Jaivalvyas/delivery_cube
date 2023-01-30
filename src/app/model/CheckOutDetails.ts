import { Billing } from "./Billing";
import { Order } from "./Order";
import { User } from "./User";

export class CheckOutDetails  {
    orderId!: number;
    user: User =new User;
    order: Order = new Order; 
    billingDetails: Billing = new Billing;
    
    
}
