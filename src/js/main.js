// this is our javascript file.
console.log("javascript calculator linked")
// 1. Create a function name "getElementValue" that will get a value from an element.
// this function will take one parameter "selector"
// which will select the elements.
// this function will return the innerText of an element.
function getElementValue(selector){
    let element = document.querySelector(selector);
    return element.innerHTML;
}

// 2. create function name "multiply" that will take two numbers as parameters
// and multiply them together. 
// parameter named: firstValue, secondValue
// reference here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
// and return the result
function multiply (firstValue, secondValue){
    return firstValue * secondValue;
}


// 3. create a function "updateResult" that will calculate the result.
// a. this will get the values from step 1 and parse the values
// using the parseInt function reference here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
// b. mutliply the values from "a."
// update the element with the innerText of "We don't know" 
function updateResult(){
    let firstValue = getElementValue("#first-value");
    let secondValue = getElementValue("#second-value");
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    result = multiply(firstValue, secondValue);
    let element = document.querySelector("#result");
    element.innerText = result;
}


// 4. Call the function "updateResult" on the page load.
updateResult()