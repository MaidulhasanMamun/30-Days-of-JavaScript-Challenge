//window scope
let a = 'JAvaScript'; //is a window scope found everywhere
let b = 10;
const letsLearnScope = () => {
    console.log(a, b);
    if(true) {
        let a = 'Python';
        let b = 100;
        console.log(a, b);
    }
    console.log(a, b);

}
letsLearnScope();
console.log(a, b);

//local scope

let x = 'JavaScript';
let y = 10;
const letsLearnLocalScope = () => {
    console.log(x, y); //JavaScript 10, accessible
    let e = 30;
    if(true) {
          // we can access from the function and outside the function but 
          // variables declared inside the if will not be accessed outside the if block
        let x = 'Python';
        let y = 20;
        let z = 40;
        console.log(x, y, z); //Python 20 30
    }
    console.log(x, y);

}
letsLearnLocalScope();
console.log(x, y);

const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle);

const person = {
    firstName: 'Michele',
    lastName: 'Zucca',
    age: 39,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS', 
        'JavaScript',
        'React',
        'Sass',
        'Node',
        'MongoDB',
        'D3.js'
    ],
    //creating an object method
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    isMarried: false,
    phoneNumber: '+35899999999'
}
console.log(person);
console.log(person.getFullName());
console.log(person.age);
console.log(person.skills);

//setting new keys in the object
person.nationality = ('Italian');
person.title = 'Front-End Developer';
person.skills.push('Adobe XD');
console.log(person);
console.log(person.skills);

person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length -1).join(', ');
    console.log(skillsWithoutLastSkill)
    let lastSkill = this.skills.splice(this.skills.length -1)[0];
    let skills = `${skillsWithoutLastSkill} and ${lastSkill}`;
    let fullName = this.getFullName();
    let statement = `${fullName} is a ${this.title}, he lives in ${this.country}. He studies ${skills}.`
    return statement;

}
console.log(person.getPersonInfo());

//Object.assign: To copy an object without modifying the original object
//Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty is to check if a key or a property exists in an object

const copyPerson = Object.assign({}, person);
copyPerson.firstName = 'Caroline';
copyPerson.lastName = 'Kiunnunen';
copyPerson.age = '33';
copyPerson.isMarried = true;
console.log(copyPerson);
const keys = Object.keys(copyPerson);
const values = Object.values(copyPerson);
console.log(keys);
console.log(values); 
console.log(copyPerson.hasOwnProperty('firstName'));

//EXERCISES
//1. Create an empty object called dog
const dog = {};

//2. Print the the dog object on the console
console.log(dog);

//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Pepsi';
dog.legs = 4;
dog.color = 'white';
dog.age = 3;
dog.bark = function() {
    return 'woof woof';
}
console.log(dog);
console.log(dog.bark());

//4. Get name, legs, color, age and bark value from the dog object
let nameValue = Object.values(dog);
let legsValue = Object.values(dog);
let ageValue = Object.values(dog);
let barkValue = Object.values(dog);
console.log(nameValue, legsValue, ageValue, barkValue);

//5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'Golden Retriever';
dog.getDogInfo = function() {
    let fullInfo = `The dog name is ${this.name}, he is a ${this.breed}, ${this.age} years old.`
    return fullInfo;
}

console.log(dog.getDogInfo());


//EXERCISES LEVEL 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
//1. Find the person who has many skills in the users object.

//2. Count logged in users,count users having greater than equal to 50 points from the following object.
    let usersLoggedIn = [];
    let usersCountPoints = [];
    let usersLoggedInCount = 0;
    let countPoints = 0;
    for (const user in users) {

        if(users[user].isLoggedIn) {
            usersLoggedInCount++;
            usersLoggedIn.push(user);
        }
        console.log(user)
        if(users[user].points >= 50);
        countPoints ++;
        usersCountPoints.push(user);
    }

    console.log(usersCountPoints);
    console.log(`There are ${countPoints} users with 50 or more points.`);
    console.log(`There are ${usersLoggedInCount} logged in users`);

//3. Find people who have MERN stack developer from the users object
for (const user in users) {
    if(users[user].skills.includes('MongoDB','Express', 'React', 'Node')) {
        console.log(`${user} have MERN stack skills.`)
    }
}

//4. Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({Michele: {email: 'michele.zucca81@gmail.com'}}, users);
console.log(copyUsers)

//5. Get all keys or properties of users object
let usersKeys = Object.keys(copyUsers);
console.log(usersKeys);
//6. Get all the values of users object
let usersValues = Object.values(copyUsers);
console.log(usersValues);


//7. Use the countries object to print a country name, capital, populations and languages.
for(const country in countries) {
    console.log(countries[country].name);
    console.log(countries[country].capital);
    console.log(countries[country].populations);
    console.log(countries[country].languages);

}

//EXERCISES Level 3
//1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'Michele',
    lastName: 'Zucca',
    income: {
        salary: 2000,
        stocks: 500,
        freelancing: 1000

    },
    expenses: {
        mortgage: 427,
        maintenance: 227,
        bills: 50,
        daycare: 165
    },
    totalIncome: function() {
        const income = Object.values(personAccount.income);
        let totalIncome = 0;
        for(const item in income) {
            totalIncome = totalIncome + income[item];

        }
        return totalIncome;

    },
    totalExpenses: function() {
        const expense = Object.values(personAccount.expenses);
        let totalExpenses = 0;
        for(const item in expense) {
            totalExpenses = totalExpenses + expense[item];
        }
        return totalExpenses;
    },
    addIncome: function(type, amount) {
        personAccount.income[type] = amount;

    },
    addExpense: function(type, amount) {
        personAccount.expense[type] = amount; 
    },
    accountBalance: function() {
        let totalExpenses = this.totalIncome();
        let totalIncome = this.totalExpenses();
        let accountBalance = totalExpenses -  totalIncome;
        return accountBalance;
    },
    accountInfo: function() {
        console.log(`Person name is ${this.firstName} ${this.lastName}. His income is ${this.totalIncome()} per month and his expenses are ${this.totalExpenses()} per month. His account balance is ${this.accountBalance()}`);
    }



};
console.log(personAccount);
console.log(`${personAccount.firstName} total income is €${personAccount.totalIncome()} per month.`);
console.log(`${personAccount.firstName} total expenses are €${personAccount.totalExpenses()} per month.`);
console.log(`${personAccount.addIncome('bonus', 100)}`);
console.log(`${personAccount.firstName} account balance is €${personAccount.accountBalance()}.`);
console.log(personAccount.income);
console.log(`${personAccount.firstName} account balance is €${personAccount.accountBalance()}.`);

