//Exercises level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]

//1. Explain the difference between forEach, map, filter, and reduce.
//2. Define a call function before you them in forEach, map, filter or reduce.
//3. Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country));

//4. Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name));

//5. Use forEach to console.log each number in the numbers array.
numbers.forEach(num => console.log(num));

//6. Use map to create a new array by changing each country to uppercase in the countries array.
const countriesToUpperCase = countries.map(country => country.toUpperCase());
console.log(countriesToUpperCase);

//7. Use map to create an array of countries length from countries array.
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

//8. Use map to create a new array by changing each number to square in the numbers array
const numsSquared = numbers.map(num => num * num);
console.log(numsSquared);

//9. Use map to change to each name to uppercase in the names array
const namesToUppercase = names.map(name => name.toUpperCase());
console.log(namesToUppercase);

//10. Use map to map the products array to its corresponding prices.
const findPrices = products.map(product => product.price);
console.log(findPrices);

//11. Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);

//12. Use filter to filter out countries having six character.
const countriesWithSixCharacters = countries.filter(country => country.length === 6);
console.log(countriesWithSixCharacters);

//13. Use filter to filter out countries containing six letters and more in the country array.
const countriesWithSixCharactersOrMore = countries.filter(country => country.length >= 6);
console.log(countriesWithSixCharactersOrMore);

//14. Use filter to filter out country start with 'E';
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);

//15. Use filter to filter out only prices with values.
const pricesWithValues = products.filter(product => product.price !== " " && product.price !== "");
console.log(pricesWithValues);

//16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = numbers.filter(num => num.toString());
console.log(getStringLists);

//17. Use reduce to sum all the numbers in the numbers array.
const sumOfNums = numbers.reduce((accum, curr) => accum + curr);
console.log(sumOfNums);

//18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const countriesString = countries.reduce((country) => countries.concat( 'are north European Countries.').toString());
console.log(countriesString);

//19. Explain the difference between some and every

//20 Use some to check if some names' length greater than seven in names array
const namesGreaterThanSeven = names.some(name => name.length >= 7);
console.log(namesGreaterThanSeven);

//21. Use every to check if all the countries contain the word land
const allCountriesIncludeLand = countries.every(country => country.includes('land'));
console.log(allCountriesIncludeLand);

//22. Explain the difference between find and findIndex.
//find returns the item, findIndex returns the index of the item

//23. Use find to find the first country containing only six letters in the countries array
const firstCountryWithSixLetters = countries.find(country => country.length === 6);
console.log(firstCountryWithSixLetters);
//24. Use findIndex to find the position of the first country containing only six letters in the countries array
const countryWithSixLetters = countries.findIndex(country => country.length === 6);
console.log(countryWithSixLetters);

//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = countries.findIndex(country => country.includes('Norway'));
console.log(findNorway);

//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findRussia = countries.findIndex(country => country.includes('Russia'));
console.log(findRussia);

//EXERCISES Level 2
//1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const findProductPrices = products.map(product => product.price);
console.log(findProductPrices);

const filterPrices = findProductPrices.filter((price) => typeof(price) === 'number'); 
console.log(filterPrices);

const findTotal = filterPrices.reduce((accum, curr) => accum + curr);
console.log(findTotal);

//2. Find the sum of price of products using only reduce (callback))
const sumOfPrices = products.reduce((product) => product.price + product.price );
console.log(sumOfPrices)

//3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
console.log(countriesList);


//4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

//5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

//6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

//7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
