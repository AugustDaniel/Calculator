import * as calc from "./calculator.js";

function numberPressed(number) {
    currentDisplay.textContent += number;
}

function operatorButtonPressed(button) {
    let operator = button.value;

    if (currentDisplay.innerHTML === emptyScreen) {
        return;
    }

    if (operator === "CE") {
        clearScreen();
        return;
    }

    if (operator === "=") {
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

function clearScreen() {
    calc.resetCalculation();
    currentDisplay.innerHTML = emptyScreen;
    previousDisplay.innerHTML = emptyScreen;
}

function handleFloat() {
    if (!currentDisplay.textContent.includes(".")) {
        currentDisplay.textContent += ".";
    }
}

function handleCalculation() {
    if (calc.calculation.operator) {
        calc.calculation.num2 = currentDisplay.textContent;
        calc.executeCalculation();
        previousDisplay.textContent = `${calc.calculation.num1} ${calc.calculation.operator} ${calc.calculation.num2} =`;
        currentDisplay.textContent = calc.calculation.result;
        calc.resetCalculation();
    }
}

function handleOperation(operator) {
    if (operator === ".") {
        handleFloat();
        return;
    }

    calc.calculation.num1 = currentDisplay.textContent;
    currentDisplay.innerHTML = emptyScreen;
    calc.calculation.operator = operator;
    previousDisplay.textContent = `${calc.calculation.num1} ${calc.calculation.operator}`

    if (operator === "sqrt" || operator === "flip") {
        handleCalculation();
    }
}

const emptyScreen = "&nbsp;";
const currentDisplay = document.getElementById("current-display");
const previousDisplay = document.getElementById("previous-display");
const numbers = document.querySelectorAll("#buttons .number-button");
const operators = document.querySelectorAll("#buttons .operator-button");

numbers.forEach((num) => {
    num.addEventListener('click', (e) => numberPressed(e.target.value));

});

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => operatorButtonPressed(e.target));
});
