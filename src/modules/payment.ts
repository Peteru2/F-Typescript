import { HasFormmater } from "../interfaces/HasFormmater.js";



export class Payment implements HasFormmater {
    // client: string;
    // details: string;
    // amount: number
 
    constructor(
       readonly recipient: string,
       private details: string,
       public amount: number
    ){
       // this.client = cl,
       // this.details = de,
       // this.amount = am
 
       
    }
 
    forming(){
       return `${this.recipient} owns ${this.amount} for ${this.details}`
    }
 
 }