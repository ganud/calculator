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
    return(a / b);
}

function addKey(text) {
    displaytext = displaytext + text;
    if(displaytext.includes(".")) {
        dotbutton.disabled = true;
    }
    else {
        dotbutton.disabled = false;
    }
    if(inputtednum1 == false) {
        num1 = displaytext;
    } else {
        num2 = displaytext;
    }
    displayHTML.innerHTML = displaytext;
    console.log(text)
}

function clearDisplay() {
    displayHTML.innerHTML = "";
    displaytext = "";
    num1 = "";
    operator = "";
    num2 = "";
    dotbutton.disabled = false;
    inputtednum1 = false;
}

function addOperator(operand) {
    inputtednum1 = true;
    operator = operand;
    dotbutton.disabled = false;
    displaytext = ""
    displayHTML.innerHTML = operand;
}

function displayAnswer() {
    let ans = operate(num1, num2, operator);
    if(displaytext == "") {
        ans = 0;
    }
    if((num1) && (!num2)) {
        ans = num1;
    }
    inputtednum1 = false;
    num1 = ans;
    displaytext = ans;
    displayHTML.innerHTML = ans;
}

function deleteKey() {
    displaytext = displaytext.slice(0,-1);
    if(displaytext.includes(".")) {
        dotbutton.disabled = true;
    }
    else {
        dotbutton.disabled = false;
    }
    if(inputtednum1 == false) {
        num1 = displaytext;
    } else {
        num2 = displaytext;
    }
    displayHTML.innerHTML = displaytext;
}

function operate(a,b,operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return add(a,b);
            break;       
        case '-':
            return subtract(a,b);
            break;
        case '÷':
            return divide(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
    }
}


let inputtednum1 = false;
let operator = "";
let num1 = "";
let num2 = "";
const displayHTML = document.getElementsByClassName('display')[0];
let displaytext = "";
const dotbutton = document.getElementById("dot");

window.addEventListener('keydown', function(e) {
    input = e.key;
    if(Number.isInteger(+input) || (input == "."))
    {
        addKey(input);
    }
    else if(input == "+" || input == "-" || input == "*") {
        addOperator(input);
    }
    else if(input == "/") {
        addOperator("÷");
    }
    else if(input == "Enter") {
        displayAnswer();
    }
    else if(input == "Backspace") {
        deleteKey();
    }
});