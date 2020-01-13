//Functions

//Function declaration

// //declaring a function without a parameter
// function functionName() {
//     // code goes here
//   }
//   functionName() // calling function by its name and with parentheses

//this function only console logs
function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq)
}
square();

//these functions return. we pass data types as parameters
function generateFullName() {
    let firstName = 'Michele';
    let lastName = 'Zucca';
    let fullName = `${firstName} ${lastName}`;
    return fullName;
}

console.log(generateFullName());


function addTwoNumbers() {
    let num1 = 4;
    let num2 = 5;
    let result = num1 + num2;
    return result;
}

console.log(addTwoNumbers());

//functions with 2 or more parameters

// // function with two parameters
// function functionName(parm1, parm2) {
//     //code goes her
//   }
// 

// this function takes array as a parameter and sum up the numbers in the array

const arrNums = [1,2,3,4,5,6,7,8]
const addNumbers = (arrNums) => {
    let sum = 0;
    for (let i = 0; i < arrNums.length; i++) {
        //we want to loop through each of the number index
        sum = sum + arrNums[i];
        //the sum (0) is equal to the initial sum plus the number on the index
        
    }
    return sum;

}

console.log(addNumbers(arrNums));//returns 36

//calculate the aread of a circle

const areaOfCircle = (radius) => {
    let area = Math.PI * (radius * radius);
    return area;
}
console.log(areaOfCircle(10));

//function with unlimeted number of parameters:
//sometimes we don't know how many arguments the user is going to pass. Therefore we should know how to write a function that can take an unlimited number of arguments. A function declaration provides a function scoped arguments array like object. Anything we passed as arguments in the function can be accessed from the arguments

//it doesn't work with arrow functions?

function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(sumAllNums(1,2,3,4)); //10
console.log(sumAllNums(10, 20, 13, 40, 19)); //102
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); //173

//function expression example. the function is passed into a variable
const squaredNum = function(n) {
    return n * n;
}
console.log(squaredNum(2)); //4

//Arrow functions
//Arrow functions and function declaration have some minor differences
//arrow functions acan be written with explicit return if we have only one line
const sq = (n) => n * n;
console.log(sq(2));

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(printFullName('Michele','Zucca'));

//uppercase array with arrow function
let countries = ['Finland', 'Sweden', 'India', 'Italy', 'Brazil'];
const changeToUpperCase = arr => {
    let newArr = [];
    for(const country of countries) {
        newArr.push(country.toUpperCase());
    }
    return newArr;
}

console.log(changeToUpperCase(countries));

//functions with default parameters
//sometimes we pass default values to parameters, when we invoke the function if we do not pass the argument the default value will be used

const greetings = (name = 'Michele') => {
    let message = `Welcome ${name} to 30 days of JavaScript!`;
    return message;
}
console.log(greetings());
console.log(greetings('Johanna'));

const calculateAge = (birthYear, currentYear = 2019) => {
    let age = currentYear - birthYear;
    return age;
}

console.log(calculateAge(1981));

//with arrow function and explicit return
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + 'N';

console.log(weightOfObject(20));




