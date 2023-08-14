function add(a,b) {
    return(a + b)
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return(a / b)
}

function addKey(text) {
    displaytext = displaytext + text;
    if(inputtednum1 == false) {
        num1 = displaytext;
    } else {
        num2 = displaytext;
    }
    displayHTML.innerHTML = displaytext;
    console.log(text)
}

function clearDisplay(text) {
    displayHTML.innerHTML = "";
    displaytext = "";
    num1 = "";
    operator = "";
    num2 = "";
    inputtednum1 = false;
}
let inputtednum1 = false;
let operator = "";
let num1 = "";
let num2 = "";
// Create conditions to take num1 and num2
function addOperator(operand) {
    inputtednum1 = true;
    operator = operand;
    displaytext = ""
    displayHTML.innerHTML = operand;
}

function displayAnswer() {
    inputtednum1 = false;
    let ans = operate(num1, num2, operator);
    num1 = ans;
    displaytext = ans;
    displayHTML.innerHTML = ans;
}
const displayHTML = document.getElementsByClassName('display')[0];
let displaytext = "";

function operate(a,b,operator) {
    a = parseInt(a);
    b = parseInt(b);
    switch (operator) {
        case '+':
            return add(a,b);
            break;       
        case '-':
            return subtract(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
    }
}

// When operator clicked
// Set current input to first number, allow input for second number.
// Operate and update currentvalue to firstnumber
