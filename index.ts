#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message:"Enter the first number:"
    },
    {
        type:"number",
        name:"num2",
        message:"Enter the second number:" 
    },
    {
        type:"list",
        name:"Operator",
        message:"select the operator you want",
        choices:['+','-','*','/','**','%']
    }

]);

let result: number;

switch(answer.Operator) {


//For Addition:
    case '+':
        result = answer.num1 + answer.num2;
        console.log("num1 + num2 =", result);
        break;
      //For Subtraction:
        case '-':
            result = answer.num1 - answer.num2;
            console.log("num1 - num2 =",result);
            break;
           //For  Multiplication:
            case '*':
            result = answer.num1 * answer.num2;
            console.log("num1 * num2 =", result);
            break;
           //For Division:
            case '/':
            result = answer.num1 / answer.num2;
            console.log("num1 / num2 =", result);
            break;
           //For Exponentiation:
            case '**':
            result = answer.num1 ** answer.num2;
            console.log("num1 ** num2 =", result);
            break;
           //For modulus:
            case '%': 
            result = answer.num1 % answer.num2;
            console.log("num1 % num2 =", result);
            break;
    
};