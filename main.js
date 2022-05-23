function onClickSubmit(){
    input1 = document.getElementById("input-1")
    value = input1.value
    input2 = document.getElementById("input-2")
    value2 = input2.value
    return alert(Number(value) + Number(value2))
}