// JavaScript is a loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.

// JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.

try {
    // code that might throw an error
} catch(err) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless the error
}

try {
    let lastName = 'Zucca';
    let fullName = `${firstName} ${lastName}`;
}       catch(err) {
        console.log(err);
} finally {
    console.log('In any case I will be executed')
    //this will console log this statement reardless if the reference error or the first name not defined
}

// The catch block takes a parameter. It is common to pass e, err or error as a parameter to the catch block. This parameter is an object and it has name and message keys. Lets use the name and message.

try {
    let dogName = 'Pepsi';
    let dogInfo = `${dogName} ${dogAge}`;
} catch(err) {
    console.log('Name of the error', err.name);
    console.log('Error message', err.message);
} finally {
    console.log('The dog is alive anyway!');
}

// throw: the throw statement allows us to create a custom error. We can through a string, number, boolean or an object. Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception. Each of the following throws an exception:
//throw 'Error2'; // generates an exception with a string value
//throw 42 // generates an exception with the value 42
//throw true //generates an exception with the value true
//throw new Error('Required'); // generates an error object with the message of Required
/*
const throwErroExampleFun = () => {
    let message;
    let x = prompt('Enter a number');
    try {
        if (x == '') throw 'empty';
        if (isNaN(x)) throw 'not a number';
        x = Number(X)
        if(x < 5) throw 'too low';
        if(x > 10) throw 'too high';
    } catch(err) {
        console.log(err)
    }
}
console.log(throwErroExampleFun());*/

//Error Types
// ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
// let country = 'Finland';
// let countryInfo = `${country} ${city}`;
// console.log(countryInfo);

// SyntaxError: A syntax error has occurred
// let square = 2 x 2;
// console.log(square)

// console.log('Hello, world")

// TypeError: A type error has occurred
// let num = 10;
// console.log(num.toLowerCase());



