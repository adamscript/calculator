let displayValue = "";
let displayResult;
let operands = "";
let operator = "";
let firstOperand = 0;
let secondOperand = 0;
let result = 0;

function add(firstOperand, secondOperand){
    return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand){
    return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand){
    return (firstOperand * secondOperand);
}

function divide(firstOperand, secondOperand){
    return (firstOperand / secondOperand);
}

function operate(firstOperand, operator, secondOperand){
    switch(operator){
        case "+":
            return add(firstOperand, secondOperand);
        case "-":
            return subtract(firstOperand, secondOperand);
        case "*":
        case "x":
        case "X":
        case "×":
            return multiply(firstOperand, secondOperand);
        case "/":
        case "÷":
            return divide(firstOperand, secondOperand);
    }
}

function buttonKeys(){
    let buttons = document.getElementById("buttons").childNodes;
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', () => {
            displayValue += buttons[i].textContent;

            const display = document.getElementById("displayvalue")
            display.value = displayValue})
    }
}

function operandKeys(){
    let operandbuttons = document.getElementsByClassName("operand");
    for(let i = 0; i < operandbuttons.length; i++){
        operandbuttons[i].addEventListener('click', () => {
            operands += operandbuttons[i].textContent;
            console.log("result : ");
        })
    }
}

function operatorKeys(){
    let operatorbuttons = document.getElementsByClassName("operator");
    for(let i = 0; i < operatorbuttons.length; i++){
        operatorbuttons[i].addEventListener('click', () => {
        if(secondOperand == 0){
            firstOperand = parseInt(operands);
        }
        else{
            firstOperand = getResult();
            secondOperand = parseInt(operands);
        }
        operands = "";
        operator = operatorbuttons[i].textContent;
        console.log("first operands : " + firstOperand)
        console.log("second operands : " + secondOperand)
        console.log("result : " + getResult());
        })
    }
}

function equalsKey(){
    let equalsbutton = document.getElementsByClassName("equal");
    for(let i = 0; i < equalsbutton.length; i++){
        equalsbutton[i].addEventListener('click', () => {
            getResult();
            const display = document.getElementById("displayvalue")
            display.value = result;
        })
    }
}

function clearKey(){
    let clearbutton = document.getElementsByClassName("clear");
    for(let i = 0; i < clearbutton.length; i++){
        clearbutton[i].addEventListener('click', () => {
            firstOperand = 0;
            secondOperand = 0;
            operands = "";
            displayValue = "";
            result = 0;
            
            const display = document.getElementById("displayvalue")
            display.value = 0})
    }
}

function getResult(){
    secondOperand = parseInt(operands);
    operands = "";
    console.log("second operands : " + secondOperand)
    
    result = operate(firstOperand, operator, secondOperand);
    return result;
}

buttonKeys();
operandKeys();
operatorKeys();
equalsKey();
clearKey();