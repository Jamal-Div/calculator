 var result = document.querySelector('input')
 var operand1 = null
 var operand2 = null
 var operator = null
 function buttonPressed(button) {
    var digit = button.innerText.toString()
    if ( result.value.length == 1 & result.value[0] == '0' ) {
        if (digit == '.') {
            result.value += digit
        } else if (digit != '0') {
            result.value = digit
        }
        
    } else {
        result.value += digit
    }
 }

 function clearinput() {
    result.value = null
    operand1 = null
    operand2 = null
    operator = null
    // alert(`Operand1: ${operand1}`)
    // alert(`Operand2: ${operand2}`)
    // alert(`Operator: ${operator}`)
 }

 function Calculate(button){
 operand1 = result.value
 result.value = null
 operator = button.innerText
 }
 function resultButton() {
     if (operand2 == null) {
         operand2 = result.value;
     }

    if (operand1 != null & operator != null & operand2 != null) {
        result.value = eval(operand1 + operator + operand2);
        operand1 = result.value;
    }

    // alert(`Operand1: ${operand1}`)
    // alert(`Operand2: ${operand2}`)
    // alert(`Operator: ${operator}`)
}

 function dot(){
    if (result.value.includes('.') == false){
        result.value += '.'
    }
 }
function plusMinus() {
    result.value = (parseFloat(result.value)* -1).toString()
}

