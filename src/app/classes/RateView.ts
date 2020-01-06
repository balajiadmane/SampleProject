export class RateView {
    description:String = "";
    sic_code:String = "";
    cardBalance:CardBalance = new CardBalance();
    pipeLine:PipeLine = new PipeLine();
}   
export class CardBalance {
    visa:number = 0;
    card1:number = 0;
    card2:number = 0;
    card3:number = 0;
    card4:number = 0;
    card5:number = 0;
    card6:number = 0;
    card7:number = 0;
}
export class PipeLine {
    totalValume:number = 0;
    totalTransaction:number = 0;
    avgTicket:number = 0;
    currentRate:number = 0;
    currentFees:number = 0;
    currentAmexFees:number = 0;
    merchantType:String = "";
    HighSpped:number = 0;
}