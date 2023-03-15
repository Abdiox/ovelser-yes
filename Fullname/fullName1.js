"use strict";
//1
function writeFullName(lastName, firstName, middleName) {
  lastName + " " + firstName + " " + middleName;
}
console.log(writeFullName("Abdirahman", "Mohamed", "Roble"));
//2
function writeFullName(lastName, firstName, middleName) {
  return lastName + " " + firstName + " " + middleName;
}
console.log(writeFullName("Lind", "Peter", "Heronimous"));

//3 - Hvis man ikke skriver et middle ind kommer det ud som undefined.
function writeFullName(lastName, firstName, middleName) {
  return lastName + " " + firstName + " " + middleName;
}
console.log(writeFullName("Lind", "Peter"));

//udvidelse
function writeFullName(lastName, firstName, middleName) {
  if (middleName) {
    return lastName + " " + firstName + " " + middleName;
  } else {
    return lastName + " " + firstName;
  }
}
console.log(writeFullName("Abdirahman", "Roble"));
console.log(writeFullName("Abdirahman", "Roble", null));

//GAMMEL FUNKTION
// const name = "Abdirahman Mohamed Roble";

// //First name "Abdirahman"
// const firstNameStart = name.indexOf(0);

// const firstNameSlut = name.indexOf(" ");

// const firstName = name.substring(firstNameStart, firstNameSlut);

// console.log(firstName);

// //Middle name

// const middleNameStart = name.indexOf(" ") + 1;

// const middleNameSlut = name.lastIndexOf(" ");

// const middleName = name.substring(middleNameStart, middleNameSlut);

// console.log(middleName);

// //Last name

// const lastNameStart = name.lastIndexOf(" ") + 1;

// const lastNameSlut = name.lenght;

// const lastName = name.substring(lastNameStart, lastNameSlut);

// console.log(lastName);
