//1. Display number in text

function dispalynum(num){
    result.value +=num;
    console.log(num);
}

//2. Clear text box

function clearBox(){
    result.value="";
}

// function removeLast(num){
//     result.value = result.value-num;
//     console.log(num);
// }

function evaluateExpression(){

    result.value=eval(result.value);
}

function removeLast(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1);
}