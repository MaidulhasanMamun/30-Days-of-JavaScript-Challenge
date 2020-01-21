//Destructuring is a way to unpack arrays and objects assigning a distict variable

const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3, num4, num5] = numbers;
console.log(num1, num2, num3, num4, num5); //1,2,3,4,5

const names = ['Michele', 'Johanna', 'Aurora'];
const [firstPerson, secondPerson, thirdPerson] = names;
console.log(firstPerson, secondPerson, thirdPerson);

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

const fullStack = [
    ['HTML', 'CSS', 'JavaScript', 'React'],
    ['Node', 'MongoDB', 'Express']
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd, backEnd);

//if we want to skip some values in the arrays we can use additional coma
const nums = [22, 44, 11, 90];
let [number1, ,number3, number4] = nums;
console.log(number1, number3, number4);

//We can use default value in case the value of array for that index is undefined:

const firstNames = [undefined, 'Michele', 'Aurora'];

let [
    person1 = 'Johanna',
    person2,
    person3,
    person4 = 'Kami'
] = firstNames;

console.log(person1, person2, person3, person4);

//we cannot assign variables to all the elements of the array. We can destructure few of the first and we can get all the remaining ones using the spread operator(very powerful!)

const n = [1,2,3,4,5,6,7,8,9,10];

let [n1,n2,n3, ...rest] = n;
console.log(n1,n2,n3, ...rest);
//or 
console.log(n1,n2,n3);
console.log(rest);

//Destructuring arrays during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];

for (const [country, city] of countries) {
    console.log(country, city);
}

for (const[first, second, third] of fullStack) {
    console.log(first, second, third);
}

//Destructuring Objects
//When we destructure the name of the variable we use to destructure should be EXACTLY the same as the key or the property of the object

const rectangle = {
    height: 20,
    width: 30,
    area: 200
}

//let {width, height, area, perimeter} = rectangle;
//console.log(width, height, area, perimeter);
//30 20 200 undefined
//if the key is not found in the object variable, it will return undefined. we can pass a default value during declaration

let {width, height, area, perimeter = 60} = rectangle;
console.log(width, height, area, perimeter);

//destructuring keys as function parameters. let's create a function which takes a rectangle object and it returns a parameter of the rectagle

//object parameter without destructuring
//without destructuring
const rect = {
    width: 20,
    height: 10
}

const calculatePerimeter = rect => {
    return 2* (rect.width + rect.height)
}

console.log(calculatePerimeter(rect));

//example 2
const person = {
    firstName: 'Michele',
    lastName: 'Zucca',
    age: 29,
    country: 'Finland',
    job: 'FrontEnd Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
      ],
    languages: ['English', 'Italian', 'Finnish', 'Spanish']

}

// Lets create a function which give information about the person object without destructuring
const getPersonInfo = person => {
    const skills = person.skills;
    const formattedSkills = skills.slice(0, -1).join(', ');
    const languages = person.languages;
    const formattedLanguages = languages.slice(0, 1).join(', ');

    personInfo = `${person.firstName} ${person.lastName} lives in ${person.country}. He is  ${
        person.age
      } years old. He is an ${person.job}. He teaches ${formattedSkills} and ${
        skills[skills.length - 1]
      }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
    
      return personInfo
    }

    console.log(getPersonInfo(person));

    //object parameter with destructuring

    const calculatePerimeter2 = ({width, height}) => {
        return 2 *(width + height);
    }

    console.log(calculatePerimeter2(rect));

    const getPersonInfo2 =({
        firstName,
        lastName,
        age,
        country,
        job,
        skills,
        languages
    }) => {
        const formattedSkills = skills.slice(0, -1).join(', ');
        const formattedLanguages = languages.slice(0, 1).join(', ');
    
        personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
            skills[skills.length - 1]
          }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
        
          return personInfo
        }
        console.log(getPersonInfo2(person));

//destructuring an object during iteration

const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]
for (const {task, time, completed} of todoList) {
    console.log(task, time, completed);
}

//spread operator the get the rest of array elements
const countriesList = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
  ]

  let [gem, fra, , ...nordicCountries] = countriesList;
  console.log(gem);
  console.log(fra);
  console.log(nordicCountries);

//Spread operator to copy array

const evens = [0,2,4,6,8,10];
const odds = [1,3,5,7,9];
const wholeNumbers = [...evens, ...odds];
console.log(wholeNumbers);

// We can copy an object using a spread operator(very useful!!!), and adding key value pairs or change the object values while copying
const user = {
    name: 'Michele',
    title: 'Developer',
    country: 'Finland',
    city: 'Helsinki'
}

const copiedUser = {...user, title: 'Web Developer', age: 29, isMarried: false};
console.log(copiedUser);

//Spread operator with arrow function

const sumAllNums = (...args) => {
    console.log(args);
    let sum = 0;
    for(const n of args) {
        sum = sum + n;
    }
    return sum;
}

console.log(sumAllNums(1,2,3,4,5));
//[1,2,3,4,5]







