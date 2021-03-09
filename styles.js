let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;


function numButPress(num) {
    if(resultVal) {
        newVal = num;
        resultVal = "";
    } else {
        if(num === '.') {
            if(decimalClicked != true){
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
    document.getElementById("entry").value = newVal;
}

function mathButPress(operator) {
    if(!resultVal) {
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    document.getElementById("entry").value = "";

}

function equalButPress(num) {
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch(mathOperator) {
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        case "^":
            resultVal = prevVal ** newVal;
            break;
        case "√":
            if (newVal < 0) {resultVal = "Error";
        } else resultVal = Math.sqrt(newVal);
            break;
        case "(+/-)":
            resultVal = +newVal * (-1);
            break;
        
        default:
            resultVal = newVal;
    }
    resultVal = +resultVal.toFixed(10)
    prevVal = resultVal;
    document.getElementById("entry").value = resultVal;
    
}

function clearButPress() {
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0"
}




