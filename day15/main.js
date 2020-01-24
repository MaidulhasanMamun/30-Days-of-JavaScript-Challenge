//We create class to create an object. A Class is like an object constructor, or a "blueprint" for creating objects. We instantiate a class to create an object. The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.

//creating an object from a class is called class instantiation. one a class is created, we can do whatever we want

// syntax
// class ClassName {
    //  code goes here
//}

// Class Instantiation
// Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.

class Person {
    constructor(firstName, lastName) {
        console.log(this);
        this.firstName = firstName;
        this.lastName = lastName;
    }

};

const person = new Person('Michele', 'Zucca') //we are instantiating the class. until we don't pass values all the keys of the objects are undefined

console.log(person);




