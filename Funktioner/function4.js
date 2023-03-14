"use strict";

function greeting(firstName) {
  return `Hello ${firstName}`;
}
const result = greeting("Peter");
console.log(result);

//1 der skete ikke noget
greeting("Abdi");
//2 Så retunerede den noget

//3 Så skriver den det ud "greeting Abdi"
console.log(greeting("Abdi"));
