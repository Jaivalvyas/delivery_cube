export class Billing  {

    nameOnCard: string;
    cardNumber: number;
    expiryMonth: string;
    expiryYear: string;
    cvv: number;
    
    constructor(){
        this.nameOnCard = "";
        this.cardNumber = 0;
        this.expiryMonth = "";
        this.expiryYear = "";
        this.cvv = 0;
     
      
    }

}