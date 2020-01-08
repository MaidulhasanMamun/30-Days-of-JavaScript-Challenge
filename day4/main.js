//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.
/*let drivingAge = 18;
let userAge = prompt('Enter your age');
if (userAge >= drivingAge) {
    alert('You are old enough to drive') 
} else {
    alert(`You should wait ${drivingAge - userAge} years before you can drive`);
}*/

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*let myAge = 28;
let yourAge = prompt('Please enter your age');
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`)
} else if (myAge < yourAge){
    console.log(`You are ${yourAge - myAge} years older than me`);
} else {
    console.log('We have the same age');
}*/

//3. If a is greater than b return a is greater than b else a is less than b. Do it both using if else and ternary operator.
let a = 4
let b = 3

//with if else statement
if(a > b) {
    console.log('a is greater than b');
} else {
    console.log('b is grater than a');
}

//with ternary operator
a > b ? console.log('a is greater than b') : console.log('b is greater than a');

//4. Write a code which give grade students according to theirs scores:

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0 -49, F

/*
let score = prompt('How did you score between 0 and 100?');
if (score >= 80 || score == 100) {
    console.log('You got an A')
} else if (score >= 70 || score === 89) {
    console.log('You got a B')
} else if (score >= 60 || score === 69) {
    console.log('You got a C')
} else if (score >= 50 || score === 59) {
    console.log('You got a D')
} else if (score >= 0 || score === 49) {
    console.log('You got a F. You suck!')
} else if (score > 100) {
    console.log('wrong input. start over!');
}*/

const score = document.querySelector('.score-input');
const displayScore = document.querySelector('.btn-display-score');
const grade = document.querySelector('.grade');

displayScore.addEventListener('click', display = () => {
    if (score.value >= 80 || score == 100) {
        grade.innerHTML = 'You got an A';
    } else if (score.value >= 70 || score === 89) {
        grade.innerHTML = 'You got a B';
    } else if (score.value >= 60 || score === 69) {
        grade.innerHTML = 'You got a C';
    } else if (score.value >= 50 || score === 59) {
        grade.innerHTML = 'You got a D';
    } else if (score.value >= 0 || score === 49) {
        grade.innerHTML = 'You got an F. You suck!';
    } else if (score.value > null) {
        console.log('wrong input. start over!');
    }
    
})


//5. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
/*let month = prompt('What month is now? First letter needs to be capital (eg. March)');
switch (month) {
    case 'September' || 'October' || 'November':
        console.log('season is Autumn');
        break;
    case 'December' || 'January' || 'February':
        console.log('season is Winter');
        break;
    case 'March' || 'April' || 'May':
        console.log('season is Spring');
        break;
    case 'June' || 'July' || 'August':
        console.log('season is Summer');
        break;
    default:
        console.log('This is not a month');
    
}*/

//6. Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?

/*
let num = prompt('Please enter a number');
if (num % 2 === 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}*/

//7. Check if a day is weekend day or a working day. Your script will take day as an input.

/*
let userDay = prompt('What day is today?');
switch (userDay) {
    case 'Monday':
    console.log('This is a weekday');
    break;
    case 'Tuesday':
    console.log('This is a weekday');
    break;
    case 'Wednesday':
    console.log('This is a weekday');
    break;
    case 'Thursday':
    console.log('This is a weekday');
    break;
    case 'Friday':
    console.log('This is a weekday');
    break;
    case 'Saturday':
    console.log('This is a weekend day');
    break;
    case 'Sunday':
    console.log('This is a weekend day');
    break;
    default:
    console.log('This is not a proper day')
}*/

//8. Write a program which tells the number days in a month.
let month = prompt('Please write the month');
//let month = [userInput.toUpperCase(), userInput.toLowerCase()];

if (month === 'January' || month === 'January'.toUpperCase() || month === 'January'.toLowerCase()
|| month === 'March' || month ==='May' || month ==='July' || month ==='August' || month ==='October' || month ==='December') {
    console.log(`${month} has 31 days`)
} else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
    console.log(`${month} has 30 days`)
} else if (month === 'February') {
    console.log(`${month} has 28 days`)
} else {
    console.log('Incorrect month format')
};

/*
let displayedMonth = document.getElementById('month-result');
let displayedDays = document.querySelector('.days-number');


displayDaysPerMonth = () => {
    let month = document.getElementsByName('month');

    if (month.checked = 'January' || month.checked == 'March' || month.checked ==='May' || month.checked ==='July' || month.checked ==='August' || month.checked ==='October' || month.checked ==='December') {
    displayedMonth.innerHTML = month.value;
    displayedDays.innerHTML = '31';
    console.log(`${month.value} has 31 days`)
} else if (month.checked = 'April' || month.checked === 'June' || month.checked === 'September' || month.checked === 'November') {
    console.log(`${month.value} has 30 days`);
    displayedDays.innerHTML = '30';

} else if (month.checked === 'February') {
    console.log(`${month.value} has 28 days`)
}
};
*/


function displayRadioValue() { 
    var ele = document.getElementsByName('gender'); 
      
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
        document.getElementById("result").innerHTML
                = "Gender: "+ele[i].value; 
    } 
} 

