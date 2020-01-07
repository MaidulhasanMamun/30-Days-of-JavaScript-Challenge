//1. Declare an empty array;
const dogs = Array();

//2. Declare an array with more than 5 number of elements
let fruits = ['Apple', 'Banana', 'Peach', 'Oranges', 'Grapes', 'Pinapple', 'Mango'];

//3. Find the length of your array
console.log(fruits.length);

//4. Get the first item, the middle item and the last item of the array
let firstFruit = fruits[0];
console.log(firstFruit);
let middleFruit = Math.round((fruits.length -1) / 2);
console.log(fruits[middleFruit]);
let lastFruitIndex = fruits.length -1;
console.log(fruits[lastFruitIndex]);

//5. Declare an array called mixedDataTypes,put different data types in your array and find length of the array. You are should size be greater than 5
let mixedDataTypes = ['Carol', 33, true, null, undefined, 'Max', 4];
console.log(mixedDataTypes.length);

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(itCompanies.length);

//9. Print the first company, middle and last company
let firstCompany = itCompanies[0];
console.log(firstCompany);

let middleItCompanyIndex = Math.floor((itCompanies.length -1) /2);
console.log(itCompanies[middleItCompanyIndex]);

let lastItCompanyIndex = itCompanies.length -1;
console.log(itCompanies[lastItCompanyIndex]);

//10. Print out each company
console.log('==== print out each company ====');
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}
//11. Change each company name to uppercase one by one and print them out
console.log('==== print out each company as uppercase ====')
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.toString()} are big IT companies.`)

//13; Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log('==== check if a company exists in the array ====');
let indexOfCompany = itCompanies.indexOf('Twitter');
if (indexOfCompany != -1) {
    console.log(itCompanies[indexOfCompany])
} else {
    console.log(`This company does not exist in the array`)
}

//14. Filter out companies which have more than one 'o' without the filter method

//15. Sort the array using sort() method
console.log(itCompanies.sort());

//16. Reverse the array using reverse() method
//console.log(itCompanies.reverse());

//17. Slice out the first 3 companies from the array
//console.log(itCompanies.slice(0, 3));

//18. Slice out the last 3 companies from the array
//console.log(itCompanies.slice(4, -1));

//19. Slice out the middle IT company or companies from the array
//console.log(itCompanies.slice(3,4));

//20. Remove the first IT company from the array
//console.log(itCompanies.splice(0,1));

//21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice((itCompanies.length -1) /2));

//22. Remove the last IT company from the array
//console.log(itCompanies.splice(itCompanies.length -1))

//23. Remove all IT companies
//console.log(itCompanies.splice());

//24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js ans store the webTechs array in to this file. Access both file in main.js file
//done

//25. First remove all the functions and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ');
console.log(words.length);

//26. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
// add 'Meat' in the beginning of your shopping cart if if it has not be already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

// Remove 'Honey' if you are allergic to honey
shoppingCart.splice(4, 1);
console.log(shoppingCart);
// modify tea to 'Green Tea'

shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);


//27. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let ethiopiaIndex = countries.indexOf('Ethiopia');
let lastCountryIndex = countries.length -1;
if (ethiopiaIndex !=-1) {
    console.log('ETHIOPIA')
} else {
    countries[lastCountryIndex] = 'Ethiopia';
}

//28. In the webTechs array check if Sass exists in the array if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array.
let sassIndex = webTechs.indexOf('Sass');
let lastIndex = webTechs.length -1;
if (sassIndex !=-1) {
    console.log('Sass is a CSS preprocessor') 
} else {
    webTechs[lastIndex] = 'Sass';
}
console.log(webTechs);

//29. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//30. The following is a list of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages);
// Find the min age and the max age
console.log('==== find the min and max age ===');
let minAge = ages[0];
console.log(minAge);

let lastIndexAge = ages.length -1;
console.log(ages[lastIndexAge]);

// Find the median age(one middle item or two middle items divided by two);
console.log('=== find the median age ====')
let median = Math.round((ages.length -1 ) /2);
console.log(ages[median]);


// Find the average age(all items divided by number of items);
console.log('==== find the average ====');

const findAverage = (ages) => {
    let sum = 0;
    let average
    for(let i = 0; i < ages.length; i++) {
        sum = sum + ages[i];
        average = Math.round(sum / i);
    }

    return average
}

console.log(findAverage([19, 22, 19, 24, 20, 25, 26, 24, 25, 24]));


// Find the range of the ages(max minus min)
console.log('=== find the range, min minus max age ===');
let range = (ages[lastIndexAge]) - minAge;
console.log(range);

// Compare the value of (min - average) and (max - average), use abs() method
let value1 = Math.abs(minAge - 25);
console.log(value1)


//31. Find the middle country(ies) in the countries list
let middleCountriesIndex = Math.round((countries.length -1) / 2);
console.log(countries[middleCountriesIndex]);

//32. Divide the countries list into two equal lists if it is even. If countries array is not even one more country for the first half.
console.log(countries.length);
let arrCountries2 = [];
/*if (countries.length % 2 === 0) {
    arrCountries1 = countries.slice(0, 5)
}*/

let arrCountries1 = countries.splice(0, 5);
console.log(arrCountries1);
console.log(countries);
