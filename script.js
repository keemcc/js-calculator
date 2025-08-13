const output = document.querySelector(".display");
let firstNumber = null;
let operator = null;
let secondNumber = null;

document.querySelector(".clear").addEventListener("click", (e) => {
    output.value = "";
});

document.querySelector(".back").addEventListener("click", () => {
    output.value = output.value.slice(0, -1);
});

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        output.value += button.textContent;
    });
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        firstNumber = parseFloat(output.value);
        operator = button.textContent;
        output.value = "";
    });
});

document.querySelector(".equal").addEventListener("click", () => {
    secondNumber = parseFloat(output.value);
    let result = null;
    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "x":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
        default:
            break;
    };
    output.value = result;
});

document.querySelector(".decimal").addEventListener("click", () => {
    output.value += ".";
});

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}