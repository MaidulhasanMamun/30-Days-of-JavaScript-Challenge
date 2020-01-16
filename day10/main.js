//SET
//A set is a collection of elements. a set can only contain unique elements

//Creating a Set
const companies = new Set();
console.log(companies);

//Creating a set from arrays

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
  ]

  console.log(languages);
  const setOfLanguages = new Set(languages);
  console.log(setOfLanguages);

  //set is iterable

  for(const language of setOfLanguages) {
      console.log(language);
  }

  //adding an element to a Set
  console.log(companies.size); //0
  companies.add('Facebook');
  companies.add('Google');
  companies.add('Microsoft');
  companies.add('Salesforce');
  companies.add('Apple');
  companies.add('Twitter');

  console.log(companies);

  //we can also loop to add companies to a set
  const itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Netflix'];
  const setOfItCompanies = new Set();
  for (const company of itCompanies) {
      setOfItCompanies.add(company);
  }
  console.log(setOfItCompanies);

  //deleting an element from a Set
  console.log(setOfItCompanies.delete('Google'));
  console.log(setOfItCompanies.size); //4

  //checking an element in the set
  console.log(setOfItCompanies.has('Facebook')); //true
  console.log(setOfItCompanies.has('Google')); //false

  //remove all elements from a set
  setOfItCompanies.clear();
  console.log(setOfItCompanies.size); //0

  //ways to use set. for instance we can count how many times  a not unique word is repeated in a Set
  const langSet = new Set(languages);
  console.log(langSet.size); //4
  const counts = [];
  const count = {};

  for (const l of langSet) {
      const filteredLanguage = languages.filter(lng => lng === l);
        console.log(filteredLanguage);
        counts.push({lang : l, count: filteredLanguage.length})
  }
  console.log(counts);

    // 0: {lang: "English", count: 3}
    // 1: {lang: "Finnish", count: 1}
    // 2: {lang: "French", count: 2}
    // 3: {lang: "Spanish", count: 1}
    // length: 4

 //another way of using Set: to count the unique items in the array
  const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
  const setOfNums = new Set(numbers);
  console.log(setOfNums);

// Union of sets
// To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C); // [1, 2, 3, 4, 5, 6];

// Intersection of sets
// To find an intersection of two sets can be achieved using filter. Lets find the union of set A and set B (A ∩ B)

/*
let num1Set = new Set(a);
let num2Set = new Set(b);
let result = a.filter(num => num2Set.has(num));
let setResult = new Set(result);
console.log(setResult);*/

// Difference of sets
// To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)

let num1Set = new Set(a);
let num2Set = new Set(b);
let result = a.filter(num => !num2Set.has(num));
let setResult = new Set(result);
console.log(setResult); // {1, 2};

//MAP
//creating an empty Map
const map = new Map();
console.log(map);

const cities = [
    ['Finland', 'Helsinki'],
    ['Brazil','Rio De Janeiro'],
    ['Peru', 'Lima']
]

const mapOfCities = new Map(cities);
console.log(mapOfCities);
console.log(mapOfCities.size);

//adding values to a map
const mapCountries = new Map();
console.log(mapCountries.size);
mapCountries.set('Finland', 'Helsinki');
mapCountries.set('Norway', 'Oslo');
mapCountries.set('Sweden', 'Stockohlm');
mapCountries.set('Iceland', 'Reikjavik');

console.log(mapCountries);







