"use strict";
const parm = "en værdi";

function myFunc(parm) {
  console.log(parm);
  parm = "en ny værdi";
  console.log(parm);
}

console.log(parm);
myFunc(parm);
console.log(parm);
