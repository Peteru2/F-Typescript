"use strict";
const Yname = "Peter";
console.log(Yname);
const yeat = "This is a new year";
const input = document.querySelectorAll('input');
input.forEach(input => {
    console.log(input);
});
console.log("Things aren't going has planned");
const getRad = (radius) => {
    return radius * Math.PI;
};
console.log(getRad(76));
let mixed = [];
mixed.push("You are welcome to");
mixed.push(2023);
console.log(mixed);
let objMixed;
objMixed = { name: "Jesus is Lord", value: 20, type: false };
dFunc: Function;
const dFunc = (a, b) => {
    return console.log(a + b);
};
dFunc(2, 3);
const myUser = (name, uid) => {
    console.log(`${name} has an id of ${uid}`);
};
const myUser2 = (name, item) => {
    console.log(`My name is ${name.name}, with the ID of ${name.uid} `);
};
myUser2(name, { name: "olatunji", uid: 8 });
