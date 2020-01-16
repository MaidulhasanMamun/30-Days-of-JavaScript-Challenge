//EXERCISES

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
let countries = ['Finland', 'Sweden', 'Norway', 'France', 'Brazil', 'Italy', 'Russia', 'Estonia', 'Madagascar'];

//1. create an empty set
const setOfCountries = new Set(countries);

//2. Create a set containing 0 to 10 using loop
const setOfNums = new Set();
for (let i = 0; i < 10 +1; i++) {
    setOfNums.add(i)
}
console.log(setOfNums);

//3. Remove an element from a set
setOfCountries.delete('France');
console.log(setOfCountries);

//4. Clear a set
setOfCountries.clear();

//5. Create a set of 5 string elements from array

//6. Create a map of countries and number of characters of a country

const mapOfCountries = new Set(countries);

const countriesArr = [];
const count = {};
for (const country of mapOfCountries) {
    countriesArr.push({countryName: country, countLetters: country.length})
}
console.log(countriesArr);

// Exercises:Level 2
// Find a union b
const c = [...a, ...b];
let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(C);
// Find a intersection b
let d = a.filter(num => B.has(num));
let D = new Set(d);
console.log(D);

// Find a with b
let e = a.filter(num => B.has(num));
let E = new Set(e);
console.log(E);


// Exercises:Level 3


// *** Use the countries data to find the 10 most spoken languages:

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [(91, 'English'),
// (45, 'French'),
// (25, 'Arabic'),
// (24, 'Spanish'),
// (9, 'Russian'),
// (9, 'Portuguese'),
// (8, 'Dutch'),
// (7, 'German'),
// (5, 'Chinese'),
// (4, 'Swahili'),
// (4, 'Serbian')]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// (91, 'English'),
// (45, 'French'),
// (25, 'Arabic')
// ]```
