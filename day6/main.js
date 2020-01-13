//For loops 

//For loop structure
/*for(initialization, condition, increment/decrement){
    // code goes here
  }*/
/*
  for(let i = 0; i <= 5; i++) {
      console.log(i)
      console.log(`${i} * ${i} = ${i * i}`);
  }

  //adding all elements in the array
const num = [1,2,3,4,5];
let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];

}
console.log(sum);

//creating a new array based on the existing array
const numbers = [1,2,3,4,5];
const result = [];
for (let i = 0; i < numbers.length; i++) {
    result.push(i * i);
}
console.log(result);

//creating a new array and pushing all countries array uppercased
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark'];
const uppercasedCountries = [];
for(let i = 0; i < countries.length; i++) {
    uppercasedCountries.push(countries[i].toUpperCase());
}
console.log(uppercasedCountries);


//for of loop are useful if we are not interested in the index
/*for (const element of arr) {
    // code goes here
  }*/
//uppercasing with a for of loop
/*const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const upperCasedWebTechs = [];
  for (const tech of webTechs) {
      upperCasedWebTechs.push(tech.toUpperCase());
  }
  console.log(upperCasedWebTechs);*/

  //EXERCISES

//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
/*for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//with while loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

//with do while loop
let j = 0;
do {
    console.log(j);
    j++
} while (j <= 10);*/

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
/*for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//with while loop
let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

//with do while loop
let j = 10;
do {
    console.log(j);
    j--;
} while (j >= 0);*/


//3. Iterate 0 to n using for loop
let n = 10;
for (let i = 0; i < n +1; i++) {
    console.log(i);
}

//4. Write a loop that makes the following pattern using console.log():
    // #
    // ##
    // ###
    // ####
    // #####
    // ######
    // #######

console.log('write a loop that makes the following pattern');
let hash = '#';
for(let i = 0; i < 7 +1; i++) {
    console.log(hash.repeat(i));
}

//5. Use loop to print the following pattern:

console.log('Use for loop to print the following pattern')
for(let i = 0; i < 11; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

    // 0 x 0 = 0
    // 1 x 1 = 1
    // 2 x 2 = 4
    // 3 x 3 = 9
    // 4 x 4 = 16
    // 5 x 5 = 25
    // 6 x 6 = 36
    // 7 x 7 = 49
    // 8 x 8 = 64
    // 9 x 9 = 81
    // 10 x 10 = 100

//6. Using loop print the following pattern
console.log('use loop to print the following pattern');
    let patternIndex = 10;
    for (let i = 0; i < patternIndex +1; i++) {
        console.log(`i i^2 i^3`);
        console.log(`${i} ${i**2} ${i**3}`);
    }
    //  i    i^2   i^3
    //  0    0     0
    //  1    1     1
    //  2    4     8
    //  3    9     27
    //  4    16    64
    //  5    25    125
    //  6    36    216
    //  7    49    343
    //  8    64    512
    //  9    81    729
    //  10   100   1000

//7. Use for loop to iterate from 0 to 100 and print only even numbers
console.log('Use for loop to iterate from 0 to 100 and print only even numbers');
for(let i = 0; i < 100 +1; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
    
//8. Use for loop to iterate from 0 to 100 and print only odd numbers
console.log('Use for loop to iterate from 0 to 100 and print only odd numbers');
for(let i = 0; i < 100 +1; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}
    
//9. Use for loop to iterate from 0 to 100 and print only prime numbers
console.log('Use for loop to iterate from 0 to 100 and print only prime numbers');
for(let i = 0; i < 100 +1; i++) {
    if(i > 1 && i % i != 1) {
        console.log(i);
    }
}
    
//10. Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.
console.log('user for loop to iterate from 0 to 100 and print the sum')
let sum = 0;
for(let i = 0; i < 100 +1; i++) {
    sum = sum + i;
}
console.log(sum);
    
// The sum all numbers is 5050.

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

console.log('sum of evens, sum of odds');
let sumOfEvens = 0;
let sumOfOdds = 0;

for(let i = 0; i < 100 +1; i++) {
    if(i % 2 === 0) {
        sumOfEvens = sumOfEvens + i
    } else if(i % 2 != 0) {
        sumOfOdds = sumOfOdds +i;
    }

}
console.log(`sum of even is ${sumOfEvens}`);
console.log(`sum of odds is ${sumOfOdds}`);
    
//The sum of all evens is 2550. And the sum of all odds is 2500.

//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumOfEvensAndOdds = [];
let sumOfEv = 0;
let sumOfOd = 0;
for(let i = 0; i < 100 +1; i++) {
    if(i % 2 === 0) {
        sumOfEv = sumOfEv + i;
    } else if(i % 2 != 0) {
        sumOfOd = sumOfOd +i;
    }
};
sumOfEvensAndOdds.push(sumOfEv, sumOfOd);

console.log(sumOfEvensAndOdds);

    
//   [2550, 2500]
//13. Develop a small script which generate array of 5 random numbers
console.log('Develop a small script which generate array of 5 random numbers')
let arrOfRandomNums = [];
for (let i = 0; i < 5; i++) {
    let random = Math.round(Math.random()*100);
    arrOfRandomNums.push(random);
}
console.log(arrOfRandomNums);
    
//15. Develop a small script which generate array of 5 random numbers and the numbers must be unique
console.log('develop a small script which generates 5 random unique numbers')
    
//16. Develop a small script which generate a six characters random id:
console.log('Develop a small script which generate a six characters random id:')
let lettersNumbers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
let randomID = '';

for (let i = 0; i < 6; i++) {
    let randomIndex = (Math.floor(Math.random()* lettersNumbers.length -1));
    randomID = randomID + lettersNumbers[randomIndex];

}
console.log(randomID);
    
    // 5j2khz
    // Develop a small script which generate a any number of characters random id:
    
    // fe3jo1gl124g
    // xkqci4utda1lmbelpkm03rba
console.log('develop a small script that generates any number of characters ID');
let ID = '';
let randomIndexLength = 12+(Math.floor(Math.random() * 10));
for(let i = 0; i < randomIndexLength; i++) {
    let randomIndex = Math.round(Math.random()*lettersNumbers.length -1);
    ID = ID + lettersNumbers[randomIndex]; 
}
console.log(ID);

//17. Write a script which generates a random hexadecimal number.
console.log(' Write a script which generates a random hexadecimal number.');
let hexaLettersNumbers = 'abcdef1234567890';
let hexaColor = '';
for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexaLettersNumbers.length -1);
    hexaColor = hexaColor + hexaLettersNumbers[randomIndex];
}
console.log('#'+hexaColor);

// '#ee33df'
//18. Write a script which generates a random rgb color number.
// rgb(240,180,80)
console.log('write a script that generates random RGB colors');
let rgbColors = [];
for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * 255);
    rgbColors.push(randomIndex);
}
console.log(`RGB(${rgbColors})`);

//19. Using the above countries array, create the following new array.
console.log('Using the above countries array, create the following new array.');
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
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
  ];

  let capitalizedArr = [];
  for (let i = 0; i < countries.length; i++) {
      capitalizedArr.push(countries[i].toUpperCase());
  }

  console.log(capitalizedArr);

//20. Use the countries array to create the following array of arrays:
console.log('use the countries array to create an array of arrays');
const newCountries = []
for (const country of countries) {
    newCountries.push([country,(country.toUpperCase().slice(0,3)), country.length]);
}
console.log(newCountries);



// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

//21. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'These are countries without land'.
// ['Finland', 'Iceland']
console.log('check if there is a country containing land')

for (const country of countries) {
    country.includes('land') ? console.log(country): console.log('These are countries without land')
    
}

for(let i = 0; i < countries.length; i++) {
    if(countries[i].includes('land')) {
        console.log(countries[i]);
    } else {
        console.log('there are no countries with land')
    }
} 

//22. In above countries array, check if there a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'land', print 'These are countries ends without ia'.

console.log('countries ending with ia with a for loop')
const countriesWithIa = []
for (let i = 0; i < countries.length; i++) {
    if(countries[i].endsWith('ia')) {
        countriesWithIa.push(countries[i]);
    }
}
console.log(countriesWithIa);

//with for of loop

console.log('countries ending with ia with a for of loop')
const countriesEndingWithIa = [];
for(const country of countries) {
    if(country.endsWith('ia')) {
        countriesEndingWithIa.push(country);
    }
}

console.log(countriesEndingWithIa);

// ['Albania', 'Bolivia','Ethiopia']
//23. Using the above countries array, create an array for countries length'.

console.log('print an array with countries length')
let countryLengthArr = [];
for (const country of countries) {
    countryLengthArr.push(country.length);
}
console.log(countryLengthArr);
 

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
//24. Using the above countries array, find the country containing the biggest number of characters.
console.log('find the country containing the biggest number of characters')
for (const country of countries) {
    if(country.length === 8) {
        console.log(country);
    }
}

// Ethiopia

//25. Using the above countries array, find the country containing only 5 characters.
console.log('find the country containing only 5 characters')

const fiveLetterCountries = [];
for(const country of countries) {
    if(country.length === 5) {
        fiveLetterCountries.push(country);
    }
}
console.log(fiveLetterCountries);

// ['Japan', 'Kenya']

//26. Find the longest word in the webTechs array

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let webTechLength = [];
for (const tech of webTechs) {
    webTechLength.push(tech.length);
}
console.log(webTechLength);
let longestWord = [];
for (const tech of webTechs) {
    console.log(tech)
    if(tech.length > tech.length)  {
        longestWord.push(tech);

    }
}
console.log(longestWord);





//27. Use the webTechs are to create the following array of arrays:
const arrOfWebTechs = [];
for(const tech of webTechs) {
    arrOfWebTechs.push([tech, tech.length]);
}
console.log(arrOfWebTechs);

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
//28. An application created using MongoDB, Express, React and Node is called a MERN stack. Create the acronym MERN by using the array mernStack

//29. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

console.log('iterate through the webTech array and print out the items');
for (const tech of webTechs) {
    console.log(tech);
}



//30. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
console.log('reverse the order of the array without using the reverse method');
let fruits =  ['banana', 'orange', 'mango', 'lemon'];
let reversedArr = [];
let len = fruits.length -1;
for (let i = 0; i < len + 1; i++) {
    reversedArr.push(fruits.pop());

}
console.log(reversedArr);

//31. Extract all the countries contain the word 'land' from the countries array and print it as array
console.log('get all countries with land and print them in an array');

const arrOfCountriesWithLand = [];
for(const country of countries) {
    if(country.includes('land')) {
        arrOfCountriesWithLand.push(country);
    }
}
console.log(arrOfCountriesWithLand);

//32. Find the country containing the highest number of characters in the countries array
console.log('find the country containing the highest number of characters')
let arrLenghtCountries = [];
for(const country of countries) {
    arrLenghtCountries.push(country.length);
}
console.log(arrLenghtCountries);

for(const country of countries) {
    if(country.length === 8) {
        console.log(country);
    }
}

//33. Extract all the countries containing only six characters from the countries array and print it as array
console.log('extract countries with 6 letters and print them in an array')

const countriesWithSixLetters = [];
for (const country of countries) {
    if(country.length === 6) {
        countriesWithSixLetters.push(country);
    }
}
console.log(countriesWithSixLetters)

//34. Extract all the countries containing two or more words from the countries array and print it as array 
console.log('extract all the countries with two or more words and print them in an array')
const countriesWithTwoWords = [];
for(const country of countries) {
    if(country.length >= 2) {
        countriesWithTwoWords.push(country)
    }
}
console.log(countriesWithTwoWords);

//35. Reverse the countries array and capitalize each country and stored it as an array
console.log('reverse the countries array and capitalize each country')
let reversedCountriesArr = [];
let newLength = countries.length -1;
for(let i = 0; i < newLength -1; i++) {
    reversedCountriesArr.push(countries.pop());
    
}
 console.log(reversedCountriesArr);

 let reversedCapitalized = [];
 for(const country in reversedCountriesArr) {
     reversedCapitalized.push(reversedCountriesArr[country].toUpperCase());
 }
 console.log(reversedCapitalized);


