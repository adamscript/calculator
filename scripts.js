let displayValue = "";
let operands = "";
let operator = "+";
let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let operatorIsPressed = false;
let equalIsPressed = false;

function add(operand1, operand2){
    return operand1 + operand2;
}

function subtract(operand1, operand2){
    return operand1 - operand2;
}

function multiply(operand1, operand2){
    return (operand1 * operand2);
}

function divide(operand1, operand2){
    return (operand1 / operand2);
}

function operate(operand1, operator, operand2){
    switch(operator){
        case "+":
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "*":
        case "x":
        case "X":
        case "×":
            return multiply(operand1, operand2);
        case "/":
        case "÷":
            return divide(operand1, operand2);
    }
}

function buttonKeys(){
    let buttons = document.getElementById("buttons").childNodes;
    for(let i = 0; i < buttons.length; i++){
        if (buttons[i].textContent != "="){
            buttons[i].addEventListener('click', () => {
                displayValue += buttons[i].textContent;
                const display = document.getElementById("displayvalue")
                display.value = displayValue})
        }
        else{
            continue;
        }
    }
}

function operandKeys(){
    let operandbuttons = document.getElementsByClassName("operand");
    for(let i = 0; i < operandbuttons.length; i++){
        operandbuttons[i].addEventListener('click', () => {
            operands += operandbuttons[i].textContent;
            getOperand();
            /*if(!operatorIsPressed){
                firstOperand = parseInt(operands);
            }
            else{
                secondOperand = parseInt(operands);
            }*/
            
            getResult();
            displayResult();
        })
    }
}

function operatorKeys(){
    let operatorbuttons = document.getElementsByClassName("operator");
    for(let i = 0; i < operatorbuttons.length; i++){
        operatorbuttons[i].addEventListener('click', () => {
            operatorIsPressed = true;
            firstOperand = result;
            operands = '0';
            //getOperand();
            operator = operatorbuttons[i].textContent;
            displayResult();
        })
    }
}

function equalsKey(){
    let equalsbutton = document.getElementsByClassName("equal");
    for(let i = 0; i < equalsbutton.length; i++){
        equalsbutton[i].addEventListener('click', () => {
            secondOperand = parseInt(operands);
            getResult();
            firstOperand = result;
            operands = "";
            equalIsPressed = true;
            displayResult();

            displayValue = result;
            const display = document.getElementById("displayvalue")
            display.value = displayValue
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
            operator = "+";
            displayValue = "";
            result = 0;
            operatorIsPressed = false;
            equalIsPressed = false;
            
            const display = document.getElementById("displayvalue")
            const displayresult = document.getElementById("displayresultvalue")
            display.value = 0
            displayresult.value = ""})
    }
}

function getOperand(){
    if(!equalIsPressed){
        if(!operatorIsPressed){
            firstOperand = parseInt(operands);
        }
        else{
            secondOperand = parseInt(operands);
        }
    }
    else{
        secondOperand = parseInt(operands);
        equalIsPressed = false;
    }
    //operands = "";
}

function getResult(){
    result = operate(firstOperand, operator, secondOperand);
    return result;
}

function displayResult(){
    const display = document.getElementById("displayresultvalue")
    console.log(firstOperand)
    console.log(secondOperand)
    console.log("result : " + result);
    display.value = result;
}

buttonKeys();
operandKeys();
operatorKeys();
equalsKey();
clearKey();