"use strict";

const navn = "peter";

const navnStart = navn.indexOf(0);

const navnSlut = navn.length;

const navnStortT = navn.substring(0, 2).toLowerCase() + navn[2].toUpperCase() + navn.substring(3, 5).toLowerCase();

console.log(navnStortT);
