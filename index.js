#! /usr/bin/env  node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { massage: "enter first number", type: "number", name: "firstNumber" },
    { massage: "enter your second number", type: "number", name: "secondNumber" },
    {
        massage: "Select one of the operators to perform action ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
//conditional statement 
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select a valid operator");
}
