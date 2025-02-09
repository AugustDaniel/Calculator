import * as calc from "./calculator.js";
import {resetCalculation} from "./calculator.js";

const emptyScreen = "&nbsp;";
const currentDisplay = document.getElementById("current-display");
const previousDisplay = document.getElementById("previous-display");
const numbers = document.querySelectorAll("#buttons .number-button");
const operators = document.querySelectorAll("#buttons .operator-button");

numbers.forEach((num) => {
    num.addEventListener('click', (e) => numberPressed(e.target.value));

});

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => operatorPressed(e.target.value));
});

document.getElementById("clear-button").addEventListener('click', () => clearScreen())

function numberPressed(number) {
    currentDisplay.textContent += number;
}

function clearScreen() {
    resetCalculation();
    currentDisplay.innerHTML = emptyScreen;
    previousDisplay.innerHTML = emptyScreen;
}

function operatorPressed(operator) {

    function handleCalculation() {
        calc.calculation.num2 = currentDisplay.textContent;
        calc.executeCalculation();
        previousDisplay.textContent = `${calc.calculation.num1} ${calc.calculation.operator} ${calc.calculation.num2} =`;
        currentDisplay.textContent = calc.calculation.result;
        calc.resetCalculation();
    }

    function handleOperation() {
        calc.calculation.num1 = currentDisplay.textContent;
        currentDisplay.textContent = "";
        calc.calculation.operator = operator;
        previousDisplay.textContent = `${calc.calculation.num1} ${calc.calculation.operator}`
    }

    if (currentDisplay.textContent === emptyScreen) {
        return;
    }

    if (operator === "." && !currentDisplay.textContent.includes(operator)) {
        currentDisplay.textContent += ".";
        return;
    }

    if (operator === "=" && calc.calculation.operator) {
        handleCalculation();
        return;
    }

    if (!calc.calculation.num1) {
        handleOperation(operator);
    } else {
        handleCalculation();
        handleOperation(operator);
    }
}