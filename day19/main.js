// Closure
// JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

// JavaScript variables can belong to the local or global scope.

// Global variables can be made local (private) with closures.

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction
}
const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

function outFunction() {
    let count = 0;
    function plusOne() {
        count++;
        return count;
    }
    function minusOne() {
        count--;
        return count;
    }
    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const inFunction = outFunction();

console.log(inFunction.plusOne);
console.log(inFunction.minusOne);

const add = (function () {
    let counter = 0;
    return function () {counter = counter +1; return counter}
})();

console.log(add());
console.log(add());
console.log(add());

// Exercises
// Exercises: Level 1
//1. Create a closure which has one inner function
function displayFullName () {
    let firstName = 'Bob';
    function displayLastName () {
        let lastName = 'Zirrol';
        return `${firstName} ${lastName}`
    } 
    return displayLastName;
} 
const displayFull = displayFullName();
console.log(displayFull());


// Exercises: Level 2
//2. Create a closure which has three inner functions



// Exercises: Level 3
//3. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.