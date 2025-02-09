import * as calc from './calculator.js';

const currentDisplay = document.getElementById("current-display");
const previousDisplay = document.getElementById("previous-display");
const numbers = document.querySelectorAll("#buttons .number-button");
const operators = document.querySelectorAll("#buttons .operator-button");

console.log(calc.add(1,2))