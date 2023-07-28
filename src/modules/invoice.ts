import { HasFormmater } from "../interfaces/HasFormmater.js";



export class Invoice implements HasFormmater {
    // client: string;
    // details: string;
    // amount: number
 
    constructor(
       readonly client: string,
       private details: string,
       public amount: number
    ){
       // this.client = cl,
       // this.details = de,
       // this.amount = am
 
       
    }
 
    forming(){
       return `${this.client} paid ${this.amount} for ${this.details}`
    }
 
 }