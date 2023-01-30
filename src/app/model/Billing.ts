export class Billing  {

    NameOnCard: string;
    cardNumber: number;
    expiryMonth: string;
    expiryYear: string;
    CVV: number;
    
    constructor(){
        this.NameOnCard = "";
        this.cardNumber = 0;
        this.expiryMonth = "";
        this.expiryYear = "";
        this.CVV = 0;
     
      
    }

}