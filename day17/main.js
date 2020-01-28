// HTML5 Web Storage
// Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies. Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. The data storage limit of cookies in many web browsers is about 4 KB per cookie. We Storages can store far larger data (at least 5MB) and never transferred to the server. All sites from the same or one origin can store and access the same data.

// sessionStorage
//only available within the browser tabl or window session

//We store data in the localStorage using the localStorage.setItem method.


//There are five methods to work on local storage: setItem(), getItem(), removeItem(), clear(), key()
// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to storage data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

//localStorage.setItem('key', 'value');

localStorage.setItem('firstName', 'Michele');
console.log(localStorage);

localStorage.setItem('age', 29);
console.log(localStorage);

// Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first. See the example below.

const skillsArr = ['HTML', 'CSS', 'JavaScript', 'React'];
//Skills array has to be stringified first to keep the format.
const skillsArrJSON = JSON.stringify(skillsArr, undefined, 4);
localStorage.setItem('skillsArr', skillsArrJSON);
console.log(localStorage);

const skillsObj = [
    { tech: 'HTML', level: 10},
    { tech: 'CSS', level: 10},
    { tech: 'Sass', level: 7},
    { tech: 'JavaScript', level: 8},
    { tech: 'React', level: 7},

]

const skillsObjJSON = JSON.stringify(skillsObj, undefined, 4);
localStorage.setItem('skillsObj', skillsObjJSON);
console.log(localStorage);


// Storing an object in a localStorage. Before we storage objects to a localStorage, the object has to be stringified.
const user = {
    firstName: 'Michele',
    age: 29,
    skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem('user', userText);

// Getting item from localStorage
// We get data from the local storage using localStorage.getItem() method.

localStorage.getItem('key');
/*
let firstName = localStorage.getItem('firstName');
let age = localStorage.getItem('age');
let skills = localStorage.getItem('skills');
let skillsParsed = JSON.stringify(skills, undefined, 4);
console.log(firstName, age, skillsParsed);*/
localStorage.clear()

// Exercises
// Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.
let myInfo = {
    firstName: 'Michele', 
    lastName: 'Zucca',
    age: 29,
    country: 'Finland', 
    city: 'Italy'
};


const myInfoText = JSON.stringify(myInfo, undefined, 4);
localStorage.setItem('myInfo', myInfoText);
console.log(localStorage);

// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
let student = {
    firstName: 'Michele',
    lastName: 'Zucca',
    age: 29,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Sass'],
    enrolled: {
        HTML: true,
        CSS: true,
        JS: true,
        React: true,
        MachineLEarning: false,
        DataScience: false
    }
}

let studentText = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', studentText);
console.log(localStorage);
let firstName = localStorage.getItem('firstName');
let lastName = localStorage.getItem('lastName');
let age = localStorage.getItem('age');
let country = localStorage.getItem('country');

let enrolled = localStorage.getItem('enrolled');
let enrolledText = JSON.parse(enrolled, undefined, 4);
console.log(firstName, lastName, age, country, enrolledText);

// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


