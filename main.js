let displayValue = 0;
let savedValue1 = 0;
let savedValue2 = 0;
let savedOperator = 0;
let input = document.getElementById("inputOperation");
let inputLenght = 1;

function concat(value){
    inputLenght = input.innerText.length + 1
    if(inputLenght < 19){
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
    
    }else if(inputLenght == 19 && savedOperator != 0){
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
            savedOperator = 0
            break;
        
        case "+":
            input.innerText = Number(savedValue1)+Number(savedValue2)
            displayValue = input.innerText
            savedOperator = 0
            break;
        
        case "-":
            input.innerText = savedValue1-savedValue2
            displayValue = input.innerText
            savedOperator = 0
            break;
        
        case "/":
            input.innerText = savedValue1/savedValue2
            displayValue = input.innerText
            savedOperator = 0
            break;
        
        case "%":
            input.innerText = (savedValue1*savedValue2)/100
            displayValue = input.innerText
            savedOperator = 0
            break;

    }
}

function deleteDisplay(){
    input.innerText = 0 
    savedValue1 = 0
    savedValue2 = 0
    savedOperator = 0

}