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

function squareRoot(num) {
    return Math.sqrt(num);
}

function percentageOf(total, percentage) {
    return (percentage / 100) * total;
}

function flipSign(num) {
    return num * -1;
}

function initOperators() {
    operatorMap.set("+", add);
    operatorMap.set("-", subtract);
    operatorMap.set("/", divide);
    operatorMap.set("%", percentageOf);
    operatorMap.set("+/-", flipSign);
    operatorMap.set("*", multiply);
    operatorMap.set("sqrt", squareRoot);
}

export function resetCalculation() {
    for (let calculationKey in calculation) {
        calculation[calculationKey] = "";
    }
}

export function executeCalculation() {
    calculation.result = operatorMap.get(calculation.operator)(Number(calculation.num1), Number(calculation.num2));
}

export const calculation = {
    result: "",
    num1: "",
    num2: "",
    operator: "",
}

const operatorMap = new Map();
initOperators();

