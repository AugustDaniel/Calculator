import * as calc from "./calculator.js";

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

function numberPressed(number) {
    currentDisplay.textContent += number;
}

function operatorPressed(operator) {

    function handleCalculation() {
        calc.calculation.num2 = currentDisplay.textContent;
        calc.executeCalculation();
        previousDisplay.textContent = `${calc.calculation.num1} ${calc.calculation.operator} ${calc.calculation.num2} =`;
        currentDisplay.textContent = calc.calculation.result;
    }

    function handleOperation() {
        calc.calculation.num1 = currentDisplay.textContent;
        currentDisplay.textContent = "";
        calc.calculation.operator = operator;
    }

    if (!currentDisplay.textContent) {
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