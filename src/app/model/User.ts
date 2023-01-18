import { Address } from "./Address"

export class User {
    email?:string    
    password?:string
    firstName?:string
    lastName?:string
    phone?:Number
    profileImage?:string
    role?:any
    street?:string    
    city?:string
    state?:string
    zip?:Number
    

    constructor(){
        this.email = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.phone = 0;
        this.profileImage = "";
        this.role="";
        this.street = "";
        this.city = "";
        this.state = "";
        this.zip = 0;
      
    }
}