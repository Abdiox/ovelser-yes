"use strict";

function sayHello(firstName, lastName) {
  console.log(`hello ${firstName} ${lastName}`);
}
sayHello("Abdi", "Roble");

sayHello();

//Undefined
sayHello(firstName, lastName);

//first name not defined
sayHello(lastName, firstName);

// const firstName = "Abdi";
// const lastName = "Roble";

// console.log(`hello ${firstName} ${lastName}`);
