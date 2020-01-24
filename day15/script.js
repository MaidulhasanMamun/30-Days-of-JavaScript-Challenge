// Exercises Level 1
//1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.skills = [];

    }
    run() {
        console.log('I run a lot!')
    }
    getAnimalInfo() {
        return `My name is ${this.name}, I am ${this.age} years old, my fur color is ${this.color} and I have ${this.legs} legs`;
    }

    set setSkills(skill) {
        this.skills.push(skill);

    }

    get getSkills() {
        return `${this.name} has ${this.skills.length} skills: ${this.skills}`;
    }

}

// const dog = new Animal('Pepsi', 3, 'Blonde', 4)
// console.log(dog.getAnimalInfo());
//2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender;
        this.skills = [];
    }

    bark() {
        return 'woof woof'
    }
    bite() {
        return 'raaaaarf!!!'
    }
}

const dog = new Dog('Pepsi', 3, 'white', 4, 'male');
console.log(dog);
console.log(dog.bark())
dog.setSkills = 'Running';
dog.setSkills = 'Biting';
dog.setSkills = 'Swimming';

console.log(dog.getSkills)

class Cat extends Animal {
    constructor(name, age, color, legs, gender, skills) {
        super(name, age, color, legs);
        this.gender = gender;
        this.skills = [];
    }

    meow() {
        return 'Meow';
    }
}

const cat = new Cat('Melinda', 3, 'grey striped', 4, 'female');
console.log(cat);
console.log(cat.meow());
console.log(cat.getAnimalInfo());
cat.setSkills = 'Purrring';
cat.setSkills = 'Scratching';
cat.setSkills = 'Climbing';

console.log(cat.getSkills);

// Exercises Level 2
//1. Override the method you create in Animal class

// Exercises Level 3
//1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.