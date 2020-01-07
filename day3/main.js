//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it
let firstName = 'Michele';
let lastName = 'Zucca';
let country = 'Finland';
let city = 'Helsinki';
let age = 38;
let isMarried = false;
let year = 1981;

//2. The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));


//3. JavaScript arithmetic operators are addition(+), subtraction(-), multiplication(*), division(/), modulus(%), exponential(**), increment(++) and decrement(--).
let operandOne = 4;
let operandTwo = 3;

console.log(operandOne + operandTwo);
console.log(operandOne - operandTwo);
console.log(operandOne * operandTwo);
console.log(operandOne / operandTwo);
console.log(operandOne % operandTwo);

let count = 0;
console.log(count++);
console.log(count);

let countMinus = 5;
console.log(countMinus--);
console.log(countMinus);

// Write three JavaScript statement which provide truthy value.
let name1 = 'Bob';
let name2 = 'Zach';
console.log(name1.length < name2.length);
console.log(name2.length > name1.length);

let num1 = 10;
let num2 = 5;
let num3 = 15;
console.log(num1 < num3 && (num1 + num2 === num3));

// Write three JavaScript statement which provide falsy value.
console.log(2 === '2');
console.log('Carol'.length < 'Zach'.length && (2 + 2) === (2 +3));
let isLightOn = true;
let isLightOff = false;
console.log(isLightOn = !isLightOn);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log('figure out the result of the following expressions')

console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let myFirstName = 'Michele';
let myLastName = 'Zucca';

myFirstName.length > 7 ? console.log('your name is long') : console.log('your name is short');

// Compare your first name length and your family name length and you should get this output.
//Your first name, Asabeneh is longer than your family name, Yetayeh
myFirstName.length > myLastName.length ? console.log(`Your first name, ${myFirstName} is longer than my family name, ${myLastName}`) : console.log(`Your family name, ${myLastName} is longer than my first name, ${myFirstName}`);

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge. Output:
//I am 225 years older than you.

let myAge = 250;
let yourAge = 25;

myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than your`) : console.log(`You are ${yourAge - myAge} years older than me`);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

/*
let yearOfBirth = prompt('Which year where you born?');
let userAge = 2020 - yearOfBirth;
let drivingAge = 18;
userAge >= drivingAge ? alert(`You are ${userAge} years old. You are old enough to drive`) : alert(`You are ${userAge}. You will be allowed to drive after ${drivingAge - userAge} years.`); 

const agree = prompt('are you sure you want to delete?');
console.log(agree) //will print the input of the user on the console
*/

// What is the year today?
const now = new Date;
console.log(now.getFullYear());

// What is the month today as a number?
console.log(now.getMonth());

// What is the date today?
console.log(now.getDate());

// What is the day today as a number?
console.log(now.getDay());

// What is the hours now?
console.log(now.getHours());

// What is the minutes now?
console.log(now.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());

// Create a human readable time format
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDay = now.getDay();
const hour = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
// YYY-MM-DD HH:mm:ss
console.log(`${currentYear}-${currentMonth}-${currentDay} ${hour}:${minutes}:${seconds}`);
// DD-MM-YYYY HH:mm:ss
console.log(`${currentDay}-${currentMonth}-${currentYear} ${hour}:${minutes}:${seconds}`);
// HH:mm:ss DD/MM/YYY 
console.log(`${hour}:${minutes}:${seconds} ${currentDay}-${currentMonth}-${currentYear}`);

const todaysHour = document.querySelector('.hours');
const todaysMinutes = document.querySelector('.minutes');
const todaysSeconds = document.querySelector('.seconds');
const todaysDay = document.querySelector('.day');
const todaysMonth = document.querySelector('.month');
const todaysYear = document.querySelector('.year');

todaysHour.innerHTML = now.getHours();
todaysMinutes.innerHTML = now.getMinutes();
todaysSeconds.innerHTML = now.getSeconds();
todaysDay.innerHTML = now.getDay();
todaysMonth.innerHTML = now.getMonth();
todaysYear.innerHTML = now.getFullYear();







 