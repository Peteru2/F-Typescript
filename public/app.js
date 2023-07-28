// const Yname = "Peter";
const me = {
    name: "Olami",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
import { Invoice } from "./modules/invoice.js";
import { Payment } from "./modules/payment.js";
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
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplates(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
