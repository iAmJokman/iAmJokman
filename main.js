let displayValue = 0;
let savedValue1 = 0;
let savedValue2 = 0;
let savedOperator = 0;
input = document.getElementById("inputOperation");

function concat(value){
    if (savedValue1 == 0){
        if (input.innerText == 0 ){
            if(value == '.' || input.innerText == '0.'){
                input.innerText = input.innerText + value
                displayValue = input.innerText
            }else{
                input.innerText = value
                displayValue = input.innerText
            }
            
        }else{
            input.innerText = input.innerText + value
            displayValue = input.innerText
        }
    }else if (savedValue1 != 0 && displayValue==0){
        input.innerText = ''
        if (input.innerText == ''){
            input.innerText = value
            displayValue = input.innerText
        }else{
            input.innerText = input.innerText + value
            displayValue = input.innerText
        }
    }else if (savedValue1 != 0 && displayValue != 0){
        if (input.innerText == ''){
            input.innerText = value
            displayValue = input.innerText
        }else{
            input.innerText = input.innerText + value
            displayValue = input.innerText
        }
    }

}

function operation(operator){
    savedOperator = operator
    savedValue1 = displayValue
    displayValue = 0
}

function equals(){
    savedValue2 = displayValue
    switch(savedOperator){
        case "*":
            input.innerText = savedValue1*savedValue2
            displayValue = input.innerText
            break;
        
        case "+":
            input.innerText = Number(savedValue1)+Number(savedValue2)
            displayValue = input.innerText
            break;
        
        case "-":
            input.innerText = savedValue1-savedValue2
            displayValue = input.innerText
            break;
        
        case "/":
            input.innerText = savedValue1/savedValue2
            displayValue = input.innerText
            break;
        
        case "%":
            input.innerText = (savedValue1*savedValue2)/100
            displayValue = input.innerText
            break;

    }
}

function deleteDisplay(){
    input.innerText = 0 
    savedValue1 = 0
    savedValue2 = 0
    savedOperator = 0

}