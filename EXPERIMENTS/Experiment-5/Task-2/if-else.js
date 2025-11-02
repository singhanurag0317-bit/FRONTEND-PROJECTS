const prompt = require ('prompt-sync')();
let age =  prompt("Enter your age: ");

if(age >= 18 && age <=60){
    console.log("You are eligible to vote!");
} else if  (age > 60) {
    console.log("You are a senior citizen voter");
} else {
     console.log("You are not eligible to vote. Come back when you are 18!");
}