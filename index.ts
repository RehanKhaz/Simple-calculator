#! /usr/bin/env node 

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "secondNumber" },
  {
    message: " Select the following operators to perform specific task",
    type: "list",
    name: "operator",
    choices: ["Addition", "Multiplication", "Subtraction", "Division"]
  },
]);

// Now Using conditional Statements( Else-if)
if( answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if( answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if( answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else if( answer.operator === "Subtraction"){
    console.log( answer.firstNumber - answer.secondNumber);
 } else {
    console.log("Please Enter Valid Operators ")
 }
 

