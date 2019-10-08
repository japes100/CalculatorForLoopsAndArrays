//This Calculator app takes more than two number inputs
const readline = require('readline-sync');
var number = null;
var result = null;
var operationArray = ['+','-','*','/'];
var inputOperation = null;
var numberOfInputs = null;
var inputArray = [];

console.log("Welcome to the calculator!");
//get the operation
inputOperation = getOperation();

//get the number of input numbers that the user wants to use
numberOfInputs = getInputCount(inputOperation, numberOfInputs);

//get the inputs
inputArray = getNumbers();

//do the calculation
result = calculation(inputOperation, inputArray);
console.log('The result is: ' + result);

function getOperation(){
    console.log('Enter the operation: ' + '\n' + '+ for Addition' + '\n' + '- for Subtraction' + '\n' + '* for Multiplication' + '\n' + '/ for Division' + '\n');
    inputOperation = readline.prompt();
    while(!operationArray.includes(inputOperation)){
        console.log('The entry must be: +, -, * or /. Please enter one of these symbols' );
        inputOperation = readline.prompt();
    }
    console.log('The operation is: ' + inputOperation);
    return inputOperation;
}

//get the number of inputs
function getInputCount(numberOfInputs){
    console.log('Enter the number of inputs you wish to ' + inputOperation);
    numberOfInputs = parseInt(readline.prompt());
        while(!checkInputIsANumber(numberOfInputs)){
            console.log('The entry must be a number, please enter a number');
            numberOfInputs = parseInt(readline.prompt());
        }
        console.log('numberOfInputs is: ' + numberOfInputs);
        return numberOfInputs;
}

//populate an array with the inputs
function getNumbers(){
    console.log('Enter the numbers you wish to ' + inputOperation);
    for(let i = 1; i < numberOfInputs+1; i++){
        console.log('Enter number  ' + i);
        inputArray[i-1] = parseFloat(getInput());
        console.log(inputArray[i-1]);
    }
    console.log('inputArray is: ' + inputArray);
    return inputArray;
}

function calculation(inputOperation, inputArray){
   switch (inputOperation) {
       case '+':
           return inputArray.reduce(add);
           function add(total, num) {return total + num;};
           break;
       case '-':
           return inputArray.reduce(subtract);
           function subtract(total, num) {return total - num;};
           break;
       case '*':
           return inputArray.reduce(multiply);
           function multiply(total, num) {return total * num;};
           break;
       case '/':
           return inputArray.reduce(divide);
           function divide(total, num) {return total / num;};
           break;
       default:
           console.log('Sorry, there is an error');
   }
}

//this function gets the user input and converts it to a number (float) value
function getInput() {
    var isNumber = false;
    var input = null;
    while (isNumber == false) {
        console.log('Please enter a number:');
        input = readline.prompt();
        isNumber = checkInputIsANumber(input);
    }
    number = parseFloat(input);
    return number;
}

//this function checks the user input is a valid number string
function checkInputIsANumber(input) {
    if (!isNaN(input)) {
        //console.log(input + " is a number.");
        return true;
    } else {
        console.log(input + " is not a number. Please input a number.");
        return false;
    }
}