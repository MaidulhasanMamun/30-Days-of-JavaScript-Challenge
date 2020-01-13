//1. Declare a function fullName and it print out your full name.
console.log('print out your full name')
const fullName = (fullName) => console.log(fullName);
console.log(fullName('Michele Zucca'));

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
console.log('function full name with 2 params')
const printFullName = (firstName, lastName) => {
    let fullName = `${firstName} ${lastName}`;
    return fullName;
}

console.log(printFullName('Michele', 'Zucca'));

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.
console.log('Declare a function addNumbers');
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(29, 22));

//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
console.log('calculate the area of a rectangle');
const areaOfRectangle = (length, width) => {
    const area = length * width;
    return area;
}
console.log(areaOfRectangle(20, 40));

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
console.log('calculate the perimeter of a rectangle');
const perimeterOfRectangle = (length, width) => {
    let perimeter = 2 *(length + width);
    return perimeter;
}
console.log(perimeterOfRectangle(40, 20));

//with explicit return
console.log('with explicit return')
const perimeterOfRectangle2 = (length, width) => 2 * (length + width);
console.log(perimeterOfRectangle2(40, 20));

//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
console.log('calculate the volume of a rectangular prism');
//with explicit return
const volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(20, 10, 50));

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
console.log('calculate the area of a circle');
const areaOfCircle = (r, p = 3.14) => p * r * r;
console.log(areaOfCircle(20)); 

//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
console.log('calculate the circumference of a circle');
const circumOfCircle = (r, p = 3.14) => 2 * p * r;
console.log(circumOfCircle(30));

//without explicit return
console.log('without explicit return');
const circumOfCircle2 = (r) => {
    let p = Math.PI;
    let circumference = 2 * p * r;
    return circumference;
}
console.log(circumOfCircle2(30));

//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
console.log('calculate density of a substance');
const calculateDensity = (mass, volume) => mass / volume;
console.log(calculateDensity(30, 20));

//no explicit return
const calculateDensity2 = (mass, volume) => {
    let density = mass / volume;
    return density;
}

console.log(calculateDensity2(30, 20));

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
console.log('calculate speed');
const calculateSpeed = (distance, time) => distance / time;
console.log(`${calculateSpeed(400, 4.8)}km p/h`)

//11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
console.log('calculate weight of a substance');
const weightOfSubstance = (mass, gravity) => mass * gravity;
console.log(weightOfSubstance(20, 9.81));

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
console.log('write a function which converts oC to oF');
const convertCelciusToFahrenheit = (oC) => (oC * 9/5) + 32;
console.log(convertCelciusToFahrenheit(25)); 

//without explicit return
const convertCelciusToFahrenheit2 = (oC) => {
    let oF = (oC * 9/5) + 32;
    return oF;
}
console.log(convertCelciusToFahrenheit2(25));


//13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

console.log('calculate BMI')

const calculateBMI = (weight, height) => {
    let bmi = weight / (height * height); 
        if (bmi <= 18.5) {
            console.log(`your bmi is ${bmi} and you are under weight`);
        } else if(bmi >= 18.5 || bmi === 24.9) {
            console.log(`your bmi is ${bmi} and you are normal weight`);
        } else if(bmi >= 25 || bmi === 29.9) {
            console.log(`your bmi is ${bmi} and you are over weight`);
        } else if(bmi >= 30) {
            console.log(`your bmi is ${bmi} and you are obese`);
        }
        return bmi
    
}
console.log(calculateBMI(190, 1.70));

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

console.log('write a function called checkseason')
const checkSeason = (month) => {
    if(month === "September" || month === "October" || month === "November") {
        console.log("Autumn");
    } else if(month === "December" || month === "January" || month === "February") {
        console.log("Winter"); 
    } else if(month === "March" || month === "April" || month === "May") {
        console.log("Spring"); 
    } else if(month === "June" || month === "July" || month === "August") {
        console.log("Summer"); 
    }
    
} 
console.log(checkSeason("June"));

//15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
console.log('Write a function findMax');
const findMax = (n1, n2, n3) => {
    if(n1 > n2 && n1 > n3) {
        return n1
    } else if (n2 > n1 && n2 > n3) {
        return n2
    } else if(n3 > n1 && n3 > n2) {
        return n3
    }
}
console.log(findMax(0, 10, 5))

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
//16. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

//17. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}


//18. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
console.log('Declare a function name printArray');  
const printArray = (nums) => {
    for(const num of nums) {
        console.log(num);
    }
}
console.log(printArray([1,2,3,4,5,6]));

//19. Declare a function name swapValues. This function swaps value of x to y.
console.log('declare a function that swap value of x to y')
const swapValues = (x, y) => {
    return [x, y] = [y, x].toString();
}
console.log(swapValues(3, 4));

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
//20. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use the reverse method).
console.log('write a function that reverses an array');
const reverseArray = (names) => {
    let newLength = names.length -1;
    let reversedArray = [];
    for(let i = 0; i < newLength +1; i++) {
        reversedArray.push(names.pop());
    }
    return reversedArray;
}
console.log(reverseArray(['Caroline', 'Hayden', 'Kami', 'Jaakko']));

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

//21 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
console.log('write a function that capitalizes an array')
const capitalizeArray = (countries) => {
    let uppercasedArr = [];
    for(const country of countries) {
        uppercasedArr.push(country.toUpperCase())
    }
    return uppercasedArr;
}
console.log(capitalizeArray(['India', 'Italy', 'Finland', 'Brazil', 'South Africa', 'Croatia']));

//22. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
console.log('Declare a function name addItem.');
const addItem = (companies, company) => {
   
        companies.push(company)
        return companies
    
    
}
console.log(addItem(['Microsoft', 'Facebook', 'Google', 'Amazon', 'Salesforce'],'Twitter'))
//23. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
console.log('Declare a function name removeItem');
const removeItem = (index) => {
    const numbers = [22, 55, 111, 90, 22, 43];
    return numbers.splice(index);
    
}
console.log(removeItem(1,1))


//24. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
console.log('Declare a function name sumOfNumbers');
const sumOfNumbers = (nums) => {
    let sum = 0;
    for(const n in nums) {
        sum = sum + nums[n];
    }
    return sum
}
console.log(sumOfNumbers([22, 44, 89, 33, 10]));

//25. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
console.log('Declare a function name sumOfOdds');
const sumOfOdds = (nums) => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 != 0) {
            sum = sum + nums[i];
        }

    }
    return sum;


}
console.log(sumOfOdds([22, 44, 89, 33, 10])); //122



//26. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
console.log('Declare a function name sumOfEven');
const sumOfEven = (nums) => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            sum = sum + nums[i];
        }
    }
    return sum;

}
console.log(sumOfEven([22, 44, 89, 33, 10])); //76



//27. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
console.log('Declare a function name evensAndOdds');
const evensAndOdds = (num) => {
    const resultArray = [];
    let countEven = 0;
    let countOdds = 0;
    for (let i = 1; i <= num; i++) {  
        if(i % 2 == 0) {
            countEven++;

        } else {
            countOdds++;
        }
         
    }
    resultArray.push(countEven,countOdds);
    return resultArray;

   
}
console.log(evensAndOdds(101));


// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
//28. Write a function which takes any number of arguments and return the sum of the arguments
console.log('Write a function which takes any number of arguments and return the sum of the arguments');
function sumOfArguments() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum;
}
console.log(sumOfArguments(1,2,3));
console.log(sumOfArguments(1,2,3,4));


// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
//29. Write a function which generates a randomUserIp.
console.log('Write a function which generates a randomUserIp');
const randomUserIp = () => {
    let userIp = [];
    let joinedIp;
    for(let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * 500);
        userIp.push(randomIndex);
        joinedIp = userIp.join(':')

    }
    return joinedIp
}

console.log(randomUserIp());

//30. Write a function which generates a randomMacAddress
console.log('Write a function which generates a randomMacAddress');



//31. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
console.log('Declare a function name randomHexaNumberGenerator');

const randomHexaNumberGenerator = () => {
    let randomLetters = 'abcdef1234567890';
    let randomHexa = '';
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random()*randomLetters.length);
        randomHexa = randomHexa + randomLetters[randomIndex];

    }
    return '#'+randomHexa;
}
console.log(randomHexaNumberGenerator());
// console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
console.log('Write a function which generates a userIdGenerator');
const userIdGenerator = () => {
    let lettersNumbers = '1234567890ABCDEFGHJKILMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyx';
    let id = '';
    for(let i = 0; i < 7; i++) {
        let randomIndex = Math.floor(Math.random() * lettersNumbers.length);
        id = id + lettersNumbers[randomIndex];
    }
    return id;
}

console.log(userIdGenerator());

// console.log(userIdGenerator());
// 41XTDbE
//31. Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
console.log('write a function that generates userID by taking 2 prompts');
/*const userIdGeneratedByUser = () => {
    let lettersNumbers = '1234567890ABCDEFGHJKILMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyx';
    let numCharacters = prompt('please input the number of characters');
    console.log(numCharacters )
     
    


}
console.log(userIdGeneratedByUser());*/

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
//32. Write a function name rgbColorGenerator and it generates rgb colors.
console.log('Write a function that generates rgb colors');
// rgbColorGenerator()
// rgb(125,244,255)
const rgbColorGenerator = () => {
    let rgbColor = [];
    let joinedRGB;
    for(let i = 0; i < 3; i++) {
        let randomIndex = Math.round(Math.random() * 255);
        rgbColor.push(randomIndex);
        joinedRGB = rgbColor.join(',');

    }
    return `RGB(${joinedRGB})`;
}
console.log(rgbColorGenerator());

//33. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
console.log('Write a function which returns any num of hexa colors in an array');
const arrayOfHexaColors = (n) => {
    let hexaLettersNums = 'abcdef1234567890';
    let hexa = '';
    let hexaArr = [];
    for(let i = 0; i < n; i++) {
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random()* hexaLettersNums.length);
            hexa = hexa + hexaLettersNums[randomIndex];
              
        }
        hexaArr.push(`#${hexa}`);
        hexa = '';
    }
    return hexaArr
}
console.log(arrayOfHexaColors(3));


//34. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
console.log('write a function that returns an array of RGB colors');
const arrayOfRgbColors = (n) => {
    let rgbColor = '';
    let arrRgbColor = [];
    for (let i = 0; i < n; i++) {
        for(let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random()*255);
            rgbColor = rgbColor + randomIndex;
        }
        arrRgbColor.push(`RGB${rgbColor}`);
        rgbColor = '';
    }
    return arrRgbColor;

}
console.log(arrayOfRgbColors(4));

//35. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

//36. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

//37. Write a function generateColors which can generate any number of hexa or rgb colors.
console.log('write a function which can generate any number of hexa or rgb colors');
const generateColors = (type, n) => {
    let typeOfColor;
    const value = type.toLowerCase();
    if('hexa' === value || 'hexadecimal' === value || 'hexavalue' === value) {
        typeOfColor = arrayOfHexaColors(n);
    } else if('rgb' === value || 'rgbColors' === value || 'RGB' === value) {
        typeOfColor = arrayOfRgbColors(n);
    }
    return typeOfColor;
}
console.log(generateColors('hexa', 2));

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
//38. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

//39. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
console.log('write a function that takes one number and returns the factorial');
factorial = (n) => {

    if (n < 0) {
       return -1
    }  else if (n === 0) {
        return 1
    } else {
     return (n * factorial(n - 1));
     }
 }
     console.log(factorial(8))
//40. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
console.log('function is empty')

    const isEmpty = (str) => {
        return (!str || /^\s*$/.test(str));

    }
    console.log(isEmpty(''))

//41. Call your function sum, it takes any number of arguments and it returns the sum.
console.log('write a function that takes any number of arguments and returns the sum')
function sum () {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;

}
console.log(sum(1,2,3,4,5));

//42. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
console.log('write a function called sumOfArrayItems');
const sumOfArrayItems = (nums) => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        
    }
    return sum
} 
console.log(sumOfArrayItems([20, 44, 55, 32, 19]));

//43. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
console.log('write a function called average');
const average = (arr) => {
    let sum = 0;
    let average;
    for(const n of arr) {
        
        sum = sum + n;
        average = sum / arr.length;  
 
    } 
    return average
}
console.log(average([22, 33, 44, 98, 39, 10]));

//44. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// // →['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// // →['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
// // →'Not Found'

//45. Write a function called isPrime, which checks if a number is prime number.

//46. Write a functions which checks if all items are unique in the array.

//47. Write a function which checks if all the items of the array are the same data type.
console.log('check if all items are the same data type');
const checkDataType = (arr) => {
    let typesArr = []
    for(const data of arr) {
        typesArr.push(typeof(data));
    }
    console.log(typesArr);
    for(const data of typesArr) {
        if(typesArr[0] !== data) {
            return false
        }
    }
    return true
}
console.log(checkDataType(['Caroline', true, 33, 'Aurora']));
console.log(checkDataType([10, 22, 99, 00]));


//48. JavaScript variable name does not support special characters or symbols except $ or _. Write a function *isValidVariable which check if a variable is valid or invalid variable.

//49. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

//50. sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)]
//51. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array