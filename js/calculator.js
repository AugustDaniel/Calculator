function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function squareRoot(num, num2) {
    return Math.sqrt(num);
}

function percentageOf(total, percentage) {
    return (percentage / 100) * total;
}

function flipSign(num, num2) {
    return num * -1;
}

function getOperator(operator) {
    switch (operator) {
        case    "+":
            return add;
        case    "-":
            return subtract;
        case    "/":
            return divide;
        case    "%":
            return percentageOf;
        case    "flip":
            return flipSign;
        case    "*":
            return multiply;
        case    "sqrt":
            return squareRoot;
    }
}

export function resetCalculation() {
    for (let calculationKey in calculation) {
        calculation[calculationKey] = "";
    }
}

export function executeCalculation() {
    calculation.result = getOperator(calculation.operator)(Number(calculation.num1), Number(calculation.num2));
}

export const calculation = {
    result: "",
    num1: "",
    num2: "",
    operator: "",
}
