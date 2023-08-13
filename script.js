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

let num1 = "";
let operator = "";
let num2 = "";
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