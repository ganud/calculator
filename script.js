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
    displayHTML.innerHTML = displaytext;
    console.log(text)
}

function clearDisplay(text) {
    displayHTML.innerHTML = "";
}

let operator = "";
let num1 = "";
let num2 = "";

function addOperator(operand) {
    operator = operand;
    if(!num1) {
        num1 = displaytext;
    }
    else if(!num2) {
        num2 = displaytext;
    }
    displaytext = ""
    displayHTML.innerHTML = operand;
}

function displayAnswer() {
    let ans = operate(num1, num2, operator);
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
