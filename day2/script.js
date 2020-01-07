let string = 'JavaScript'

let lastIndex = string.length -1;
console.log(lastIndex);
let upperCased = string.toUpperCase();
console.log(upperCased);
let subStringed = string.substr(1, 5);
console.log(subStringed);

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split((',')));

let firstName = '        Michele  ';
console.log(firstName.trim('   '))

let country = 'Finland';
console.log(country.includes('land'));
console.log(country.includes('Ita'));


//1. Declare a variable name challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 days of JavaScript';

//2. Print the string on the browser console using console.log()
console.log(challenge);
//3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//4. Change all the string to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//5. Change all the string to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//6. Cut(slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0,2));

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(2, string.length -1));

//8. Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
let becausePattern = /because/gi
console.log(becauseSentence.match(becausePattern))

//9. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

//10. Split the string into array using split() method
console.log(challenge.split(','));
//11. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));
//12. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

//13. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));

//14. What is character at index 15 in '30 Days Of JavaScript' string use charAt() method.
console.log(challenge.charAt(15));

//15. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));

//16. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

//17. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

//18. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('first occurrence of the word because');
console.log(becauseSentence.indexOf('because'));

//19. Use lastIndexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('last occurrence of the word because');
console.log(becauseSentence.lastIndexOf('because'));
//20. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'


//21. Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challengeTwo = '60 Days of PHP ';
console.log(challengeTwo);
console.log(challengeTwo.trim());

//22. Use startsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.startsWith('30'));

//23. Use endsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.endsWith('JavaScript'));
//24. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));

//25. Use match() to count the number of all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.match('because'));

//26. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string1 = '30 Days';
let string2 = ' of JavaScript';
console.log(string1.concat(string2));    

//27. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

//28. Love is the best thing in this world. Some found their love and some are still looking for their love. Count the number of word love in this sentence.
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'


//29. Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let monthlySalary = parseInt(text.match('5000'));
let annualBonus = parseInt(text.match('10000'));
let onlineIncome = parseInt(text.match('15000'));

let totalIncome = (monthlySalary * 12) + annualBonus + (onlineIncome * 12);
console.log(`He earns $${totalIncome} per year`)




//30. Clean the following text and find the most frequent word(hint, use replace and regular express).

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &';
let regEx = /[@%$&;#]/g;
let newSentence = sentence.replace(regEx,'')
console.log(sentence.replace(regEx, ''));
console.log(newSentence);

var wordCounts = { };
var words = newSentence.split(/\b/);
console.log(words)

for(var i = 0; i < words.length; i++)
    wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;

console.log(wordCounts);


console.log('check the most frequent number')
var exp = '12345667' ;
var expCounts = {};
var maxKey = '';
for(var i = 0; i < exp.length; i++)
{
    var key = exp[i];
    if(!expCounts[key]){
     expCounts[key] = 0;
    }
    expCounts[key]++;
    if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key;
    }
}

console.log(maxKey + ":" + expCounts[maxKey]);


    console.log(challenge.charAt(0));
    console.log(challenge.indexOf('days'));

    let loveString = 'Love is the best thing in this world';
    //starts with returns boolean
    console.log(loveString.startsWith('Love'));
    console.log(loveString.startsWith('Hate'));
    //search returns index
    console.log(loveString.search('best'));

    let stringJS = 'I love JavaScript. If you do not love JavaScript what else can you love.';
    console.log(stringJS.match('love'));//returns an array, if there is no match returns null
    let pattern = /love/gi;
    console.log(stringJS.match(pattern));//returns 