//console.log()
//used a lot for debugging purposes

console.log('%d %s of JavaScript', 30, 'Days');
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
); 

// console.warn()
//gives a warning on the browser, for instance to inform or warn deprecation of a version of a package or bad practices

console.warn('This is a warning');
console.warn('You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!');
  console.warn('Warning is different from error');

// console.error()
//console.error() method shows an error message

console.error('This is an error message');

//console.table()
//The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

const names = ['Asabeneh', 'Brook', 'David', 'John'];
console.table(names);

//we can also check the result of an object
const user = {
    name: 'Michele',
    title: 'Developer',
    country: 'Finland',
    city: 'Helsinki',
    age: 29
};

console.table(user);
console.log(user);

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries);

  const users2 = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users2);

  //console.time()
  //Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

  console.time('Regular for loop time');
  for(let i = 0; i < countries.length; i++) {
      console.log(countries[i][0], countries[i][1]);
  }
  console.timeEnd('Regular for loop time');

  console.time('for of loop time');
  for(const [name, city] of countries) {
      console.log(name, city);
  }
  console.timeEnd('for of loop time');

  console.time('for Each loop time');
  countries.forEach(([name, city] ) => console.log(name, city));
  console.timeEnd('for Each loop time');

//   console.info()
//  displays an information message on the browser console
  console.info('30 Days Of JavaScript challenge is trending on Github');

//   console.assert()
//  The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.

console.assert(4 > 3, '4 is bigger than 3'); //nothing is displayed cause it's true
console.assert(3 > 4, '3 is bigger than 4'); //Assertion failed: 3 is bigger than 4

//   console.group()
// The console.group() can help to group different log groups. 
console.group('Names');
console.log(names);
console.groupEnd();

console.group('Users');
console.log(user);
console.log(users2);
console.groupEnd();

// console.count()
//It prints the number of time this console.count() is called. It takes a string label parameter. It is very helpful to count the number of times a function is called. In the following example, the console.count() method will run three times

const func = () => {
    console.count('function has been called');
};
func();
func();
func();

// console.clear();
//console.clear() clears the browser's console
//let's clear the browser's console to do the exercises
console.clear();


// Exercises:Level 1
//1. Display the countries array as a table
//2. Display the countries object as a table
//3. Use console.group() to group logs
console.table(countriesArr);
console.table(countriesList);

console.group('Countries Array');
console.log(countriesArr);
console.groupEnd('Countries Array');

console.group('Countries List');
console.log(countriesList);
console.groupEnd('Countries List');


// Exercises:Level 2
//1. 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 is bigger than 2 x 10');
//2. Write a warning message using console.warn()
console.warn('This is an outdated version');
//3. Write an error message using console.error()
console.error('This is not working');

// Exercises:Level 3
//1. Check the speed difference among the following loops: while, for, for of, forEach

console.time('Uppercase names with a while loop');
let i = 0;
while(i < names.length) {
    console.log(names[i].toUpperCase());
    i++;

}
console.timeEnd('Uppercase names with a while loop');

console.time('Uppercase names with a regular for loop');
for(let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}
console.timeEnd('Uppercase names with a regular for loop');

console.time('Uppercase names with a for of loop');
for(const name in names) {
    console.log(names[name].toUpperCase())
}
console.timeEnd('Uppercase names with a for of loop');

console.time('Uppercase names with a for Each loop');
names.forEach((name) => console.log(name.toUpperCase()));
console.timeEnd('Uppercase names with a for Each loop');











