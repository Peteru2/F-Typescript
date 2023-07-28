// const Yname = "Peter";

// console.log(Yname);
// const yeat = "This is a new year";
// const input = document.querySelectorAll('input')

// input.forEach(input =>{
//     console.log(input);
// })
// console.log("Things aren't going has planned");

// const getRad = (radius: number) => {
//     return  radius * Math.PI
//  }
//  console.log(getRad(76))

//  let mixed: (number|string)[] = [];

//  mixed.push("You are welcome to");
//  mixed.push(2023);

//  console.log(mixed);

//  let objMixed: {
//     name: string,
//     value: number,
//     type: boolean
//  }

//  objMixed = { name: "Jesus is Lord", value: 20, type: false }


//  dFunc: Function;

//  const dFunc = (a:number, b: number, ) =>{
//     return console.log(a+b)
//  }
 
//  dFunc(2,3)

   
//  const myUser = (name: string, uid: number)=>{
//                 console.log(`${name} has an id of ${uid}`)
//  }

//  type stringOrNum = string | number
//  type moreString = {name: string, uid: stringOrNum }
//  const myUser2 = (name: moreString, item: number)=> {

//     console.log(`My name is ${name.name}, with the ID of ${name.uid} `)

//  }
// myUser2 (name:{name: "olatunji", uid: 8})
interface IsPerson{
   name: string,
   age: number,
   speak (a: string): void,
   spend(b: number): number
}

const me : IsPerson = {
   name: "Olami",
   age: 20,
   speak(text: string): void{
      console.log(text)
   },
   spend(amount: number): number {
      console.log(amount);
      return amount;
   }
}

const greetPerson = (person: IsPerson) =>{
   console.log("hello ",person.name)

}

greetPerson(me)

import { Invoice } from "./modules/invoice.js";
import { Payment } from "./modules/payment.js";
import { HasFormmater } from "./interfaces/HasFormmater.js";
import { ListTemplates } from "./modules/listTemplates.js";

// let docOne: HasFormmater;
// let docTwo: HasFormmater;

// docOne = new Payment("dave", "for making soap", 870)

// let doc: HasFormmater[] = []

// doc.push(docOne);

// console.log(doc[0])



// const invOne = new Invoice ('Peter', "to build a website", 400)
// const invTwo = new Invoice ('Boss Wale', "to build a Blog",600)


// console.log(invOne);

// let dInvoices: Invoice[] = []
// dInvoices.push(invOne);
// dInvoices.push(invTwo);

// dInvoices.forEach(inv =>{
//    console.log(inv.client, inv.amount, inv.forming())
// })



const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector('ul')!;
const list = new ListTemplates(ul)

form.addEventListener('submit', (e: Event) =>{
   e.preventDefault();
   let doc: HasFormmater

   if (type.value === 'invoice'){
         doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
   }
   else{
      doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);

   }
   list.render(doc, type.value, "end")
   
   console.log(
      type.value,
      tofrom.value,
      details.value,
      amount.valueAsNumber
      )
})





