//Regular expressions

//A regular expression or RegEx is a small programming language that helps to find pattern in data. A RegEx can be used to check if some pattern exists in a different data types. To use RegEx in JavaScript either we use RegEx constructor or we can declare a RegEx pattern using two forward slashes followed by a flag

//Creating a pattern with RegEx Constructor
//without global flag and case sensitive flag
let pattern = 'love';
let regEx = new RegExp(pattern);
console.log(regEx);

//Declaring regular expression with global flag and case insensitive flag.
let pattern2 = 'love';
let flag = 'gi';
let regEx2 = new RegExp(pattern2, flag);
console.log(regEx2);

//Declaring a regex pattern using RegEx object. Writing the pattern and the flag inside the RegEx constructor
let regEx3 = new RegExp('love', 'gi');

//create a pattern without using a regext constructor
let regEx4 = /love/gi;
// The above regular expression is the same as the one which we created with RegEx constructor
// let regEx3 = new RegExp('love', 'gi');

//RegExp Object Methods
//testing for a match
//test() test the matching of a regex with a string. it returns true or false
const str = 'I love JavaScript';
const pattern3 = /love/;
const result = pattern3.test(str);
console.log(result);

//Array containing all of the match
//match() returns an array containing all the matches, including capturing groups, or null if no match is found. if we don't assign a global flag, match() will return an array containing the pattern, index input and group

const str2 = 'I love React';
const pattern4 = /love/g;
const pattern5 = /love/;
const result2 = str2.match(pattern4);
const result3 = str2.match(pattern5);

console.log(result2);//["love"]
console.log(result3);//["love", index: 2, input: "I love React", groups: undefined]

//search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const str3 = 'I love CSS';
const pattern6 = /love/g;
const result4 = str3.search(pattern6);
console.log(result4);//2

//Replacing a substring
//replace() executes a search for a match in a string, and replaces the matching substring with a replacement substring
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';

//if we don't use the global flag, it will replace only the first occurance of the python word
let matchReplaced = txt.replace(/Python|python/g, 'JavaScript');
console.log(matchReplaced);

//JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language

//lets clean this text with replace()
const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%ove te%ach%ing. T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ower%ing p%e%o%ple. I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs. D%o%es thi%s m%ot%iv%a%te %y%o%u to be a t%e%a%cher.'
let match = txt2.replace(/%/g, '');

console.log(match);

// Square Bracket
// Let's use square bracket to include lower and upper case. we wantch to match both words apple and banana
const fruitsPattern = /[Aa]pple|[Bb]anana/g; //the square bracket means either A or a
const fruitsText = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matchfruits = fruitsText.match(fruitsPattern);
console.log(matchfruits);//["Apple", "banana", "apple", "banana"]

// Escape character(\) in RegEx
const numPattern = /\d+/g;
const numText = 'This regular expression was made in January 12, 2020';
const matchNums = numText.match(numPattern);
console.log(matchNums);

// Period(.)
const fruitsPattern2 = /[Aa]./g;  //this square bracket means Aa and . means any character except new line
const fruitsText2 = 'Apple and banana are fruits';
const matchFruits2 = fruitsText2.match(fruitsPattern2);
console.log(matchFruits2);

//Zero or more times(*)
//this pattern could not occur or it could occur many times
const fruitsPattern3 = /[a].*/g; //any character + any characters one or more times
const fruitsText3 = 'Apple and banana are fruits';
const matchFruits3 = fruitsText3.match(fruitsPattern3);
console.log(matchFruits3);

//Zero or one times(?)
//this pattern could not occur or it could occur once
const emailTxt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const emailPattern = /[Ee]-?mail/g;
const emailMatch = emailTxt.match(emailPattern);
console.log(emailMatch); //["e-mail", "email", "Email", "E-mail"]

// Quantifier in RegEx
// We can specify the length of the digit substring we look for in a text, using a curly bracket. Lets imagine, we are interested in substring that their length are 4 characters

const txt3 = 'This regular expression example was made in December 6,  2019.';
const pattern7 = /\d{1,4}/g //exactly four times, using curly brackets
const match2 = txt3.match(pattern7);
console.log(match2);

//Cart ^
//^ means starting with
const cartPattern = /^This/g;
const match3 = txt3.match(cartPattern);
console.log(match3); //returns null if nothing is found

//negation
const negationPattern = /[^A-Za-z,. ]+/g; // ^ in set character means negation, not A to Z, not a to z, no space, no coma and no period.remember to declare the space in the regex!
const match4 = txt3.match(negationPattern);
console.log(match4);

// Exact match
// It should have ^ starting and $ which is an end.
let exactPattern = /^[A-Z][a-z]{3,12}$/g; //the string needs to return this exact regex
let name = 'Michele';
let nameExactMatch = name.match(exactPattern);
console.log(nameExactMatch);

console.log(' =============== Exercises ============== ')
//Exercises: level 1
// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const incomeText = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

let nPattern = /[0-9]+/g;
let nMatch = incomeText.match(nPattern);
console.log(nMatch);
let [n1, n2, n3] = nMatch;
let annualSalary = parseInt(n1) * 12;
let annualBonus = parseInt(n2);
let onlineCourses = parseInt(n3) * 12;
let totalIncomeAnnual = annualSalary + annualBonus + onlineCourses;
console.log(totalIncomeAnnual); //124000


//2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

let paragraph = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles."
let patternDigits = /-\d+|\d+/g;

let matchingPattern = paragraph.match(patternDigits);
console.log(matchingPattern);

let sortedPoints = [];
for(const n in matchingPattern) {
    sortedPoints.push(parseInt(matchingPattern[n]))
}
sortedPoints.sort((a, b) => a - b);
console.log(sortedPoints);
let firstIndex = sortedPoints[0];
let lastIndex = sortedPoints[sortedPoints.length -1];
let distance = lastIndex - firstIndex;
console.log(distance);// distance = 12;

//3. Write a pattern which identify if a string is a valid JavaScript variable

let is_valid_variable = (variable) => {
    let startsWithPattern = /^[A-Z$_]/ig;
    let dashPattern = /[-]/g;
    if(variable.match(startsWithPattern) && !variable.match(dashPattern)){
        return true
    } else {
        return false;
    }
    } 

    
console.log(is_valid_variable('$first_name'));
console.log(is_valid_variable('_first_name'));
console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('first-name'));
console.log(is_valid_variable('1first_name'));
console.log(is_valid_variable('firstname'));

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

// Exercises: Level 2
//1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string.


paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const displayWords = (paragraph) => {
    let paragraphToArr = paragraph.split(' ');
    
    const sentenceSet = new Set (paragraphToArr);
    const sentenceCount = [];
    const sentenceWords = {};
    for (const w of sentenceSet) {
        const filteredWords = paragraphToArr.filter(word => word === w);
        sentenceCount.push({word: w, sentenceWords: filteredWords.length});
    }
    
    return sentenceCount
    
    
    
}

console.log(displayWords(paragraph))

    let checkWords = displayWords(paragraph);
    console.log(checkWords)
    checkWords.sort((a, b) => {
        if(a.sentenceWords > b.sentenceWords) return -1;
        if(a.sentenceWords < b.sentenceWords) return 1;
        return 0;
    })

    console.log(checkWords.slice(0, 10));



//EXERCISE LEVEL 3

//1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (sentence) => {
    let regEx = /[^A-Za-z,?. ]+/g;
    let cleanText = sentence.replace(regEx, '');
    return cleanText;
}

console.log(cleanText(sentence));

const countWords = (sentence) => {
    let newText = cleanText(sentence);
    let textToArr = newText.split(' ');
    console.log(textToArr);
    let textSet = new Set(textToArr);
    
    const paragraphCount = [];
    const paragraphWords = {};
    for (const w of textSet) {
        const filteredWords = textToArr.filter(word => word === w);
        paragraphCount.push({word: w, paragraphWords: filteredWords.length});
    }

    return paragraphCount
}

console.log(countWords(sentence))

    let wordsCounted = countWords(sentence);
    console.log(wordsCounted)    
    //testing
    let testing = wordsCounted.filter((words) => words.paragraphWords === 3 || words.paragraphWords > 1);
    console.log(testing)

    wordsCounted.sort((a, b) => {
        if(a.paragraphWords > b.paragraphWords) return -1;
        if(a.paragraphWords > b.paragraphWords) return 1;
        return 0;
    })
    console.log(wordsCounted.slice(0,3));
















