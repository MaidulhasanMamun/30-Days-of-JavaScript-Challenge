//Higher order functions

const numbers = [2, 5, 1, 5, 6];
const sumArr = arr => {
    let sum = 0;
    numbers.forEach(function(element) {
        sum = sum + element;
    })
    return sum;
}
console.log(sumArr(numbers));

// setInterval
// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// function callBack() {
//     code goes here
// }
// setInterval(callback, duration);

/*
function sayHello() {
    console.log('Hello');
}
setInterval(sayHello, 2000);*/

//for each works only with arrays
let names = ['Michele', 'Aurora', 'Johanna'];
names.forEach(name => console.log(name));

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  countries.forEach(country => console.log(country.toUpperCase()));

//MAP iterates through the array elements and modifies them. it takes a callback function with elements and index parameters and returns a new array
const nums = [1,2,3,4,5,6,7,8];
// numbersSquared = nums.map((num) => {
//      return num * num;
// })
numbersSquared = nums.map(num => num * num); //with explicit return
console.log(numbersSquared);

const cryptos = ['Bitcoin', 'Ethereum', 'Ripple', 'Iota', 'Cardano'];
cryptoToUppercase = cryptos.map(crypto => crypto.toUpperCase());
console.log(cryptoToUppercase);

countriesThreeLettersUppercased = countries.map((country) => {
    return country.toUpperCase().slice(0, 3);
})
console.log(countriesThreeLettersUppercased);

//Filter
//filter is very powerful, it filters out items which fullfill filtering cinditions and it returns a new array
const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 }
  ]

const scoresGreaterThan85 = scores.filter(score => score.score > 85);
console.log(scoresGreaterThan85);

//Find
//Every
//Some
//FindIndex
//returns the index of first element which satisfies the position
const result = cryptos.findIndex(crypto => crypto.length > 7);
console.log(result); 

//sort

const numbersArr = [9.81, 3.14, 37, 100]
console.log(numbersArr.sort());//it will sort it in the wrong way

numbersArr.sort((a, b) => {
    return b - a;
})
console.log(numbersArr);

//sorting object arrays
const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 }
  ]

users.sort((a, b) => {
    if(a.age < b.age) return -1;
    if(a.age > b.age) return 1;
    return 0; 
})
console.log(users);//sorts ascending




