export class Address{
    street?:string    
    city?:string
    state?:string
    zip?:Number

    constructor(){
        this.street = "";
        this.city = "";
        this.state = "";
        this.zip = 0;
    }
}