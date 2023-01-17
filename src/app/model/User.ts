import { Address } from "./Address"

export class User {
    email?:string    
    password?:string
    firstName?:string
    lastName?:string
    phone?:Number
    profileImage?:string
    role?:any
    address?: Address

    constructor(){
        this.email = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.phone = 0;
        this.profileImage = "";
        this.role="";
        this.address = new Address();
        this.address.street;
        this.address.city;
        this.address.state;
        this.address.zip;
    }
}