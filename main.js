let displayValue = 0;
let savedValue1 = 0;
let savedValue2 = 0;
let savedOperator = 0;

function concat(value){
    if (savedValue1 == 0){
        displayOperation = document.getElementById("inputOperation")
        if (displayOperation.innerText == ''){
            displayOperation.innerText = value
            displayValue = displayOperation.innerText
        }else{
            displayOperation.innerText = displayOperation.innerText + value
            displayValue = displayOperation.innerText
        }
    }else if (savedValue1 != 0 && displayValue==0){
        displayOperation.innerText = ''
        displayOperation = document.getElementById("inputOperation")
        if (displayOperation.innerText == ''){
            displayOperation.innerText = value
            displayValue = displayOperation.innerText
        }else{
            displayOperation.innerText = displayOperation.innerText + value
            displayValue = displayOperation.innerText
        }
    }else if (savedValue1 != 0 && displayValue != 0){
        displayOperation = document.getElementById("inputOperation")
        if (displayOperation.innerText == ''){
            displayOperation.innerText = value
            displayValue = displayOperation.innerText
        }else{
            displayOperation.innerText = displayOperation.innerText + value
            displayValue = displayOperation.innerText
        }
    }

}



function operation(operator){
    savedOperator = operator
    savedValue1 = displayValue
    displayValue = 0
}

function sum(){
    savedOperator = "+"
    savedValue1 = displayValue
}

function rest(){
    savedOperator = "-"
    savedValue1 = displayValue
}

function divide(){
    savedOperator = "/"
    savedValue1 = displayValue
}

function percentage(){
    savedOperator = "%"
    savedValue1 = displayValue
}

function equals(){
    savedValue2 = displayValue
    switch(savedOperator){
        case "*":
            displayOperation = document.getElementById("inputOperation")
            displayOperation.innerText = savedValue1*savedValue2
            displayValue = displayOperation.innerText
            break;
        
        case "+":
            displayOperation = document.getElementById("inputOperation")
            displayOperation.innerText = number(savedValue1)+number(savedValue2)
            displayValue = displayOperation.innerText
            break;
        
        case "-":
            displayOperation = document.getElementById("inputOperation")
            displayOperation.innerText = savedValue1-savedValue2
            displayValue = displayOperation.innerText
            break;
        
        case "/":
            displayOperation = document.getElementById("inputOperation")
            displayOperation.innerText = savedValue1/savedValue2
            displayValue = displayOperation.innerText
            break;
        
        case "%":
            displayOperation = document.getElementById("inputOperation")
            displayOperation.innerText = (savedValue1*savedValue2)/100
            displayValue = displayOperation.innerText
            break;

    }
}

function clear(){
    displayOperation = document.getElementById("inputOperation")
    displayOperation.innerText = ""
    displayValue = 0;
    savedValue1 = 0;
    savedValue2 = 0;
    savedOperator = 0;

}