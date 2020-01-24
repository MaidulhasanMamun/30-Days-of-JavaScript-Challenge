
// Exercises Level 1
//1. Change skills array to JSON using JSON.stringify()
const techSkills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
const JSONskillsTxt = JSON.stringify(techSkills, undefined, 4);
console.log(JSONskillsTxt);

//2. Stringify the age variable
let age = 250;
const ageTxt = JSON.stringify(age, undefined, 4);
console.log(ageTxt);

//3. Stringify the isMarried variable
let isMarried = true;
const isMarriedTxt = JSON.stringify(isMarried, undefined, 4);
console.log(isMarriedTxt);

//4. Stringify the student object
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    studentAge:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

const studentTxt = JSON.stringify(student, undefined, 4);
console.log(studentTxt);

// Exercises Level 2
//1. Stringify the students object with only firstName, lastName and skills properties
const studentTxt2 = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4);
console.log(studentTxt2);

// Exercises Level 3
const usersTxt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

//1. Parse the txt JSON to object.
const webDevs = JSON.parse(usersTxt, undefined, 4);
console.log(webDevs);

//2. Find the the user who has many skills from the variable stored in txt.
let keys = Object.keys(webDevs);
for(const webDev in webDevs) {
    console.log(webDevs[webDev].skills.length);
    if(webDevs[webDev].skills.length === 8) {
        console.log(webDevs[webDev])
    } 
}






      