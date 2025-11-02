const prompt = require ('prompt-sync')();
let age = prompt("Enter your age: ")
let message = (age>=18) ? "you are eligible" : "you are not eligible";
console.log(message)