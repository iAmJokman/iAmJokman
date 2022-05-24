
function concatSeven(){
    input = document.getElementById("keyboardSeven")
    value = input.value
    displayOperation = document.getElementById("inputOperation")
    if (displayOperation.innerText == ''){
        displayOperation.innerText = value
    }else{
        displayOperation.innerText = displayOperation.innerText + value
    }

}

function concatSix(){
    input = document.getElementById("keyboardSix")
    value = input.innerText
    displayOperation = document.getElementById("inputOperation")
    if (displayOperation.innerText == ''){
        displayOperation.innerText = value
    }else{
        displayOperation.innerText = displayOperation.innerText + value
    }

}