let displayValue = "";

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operator, num2){
    switch(operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

function buttonKeys(){
    let buttons = document.getElementsByClassName("btn");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', () => {
            displayValue += buttons[i].textContent;

            const display = document.getElementById("displayvalue")
            display.value = displayValue})
    }
}
buttonKeys();