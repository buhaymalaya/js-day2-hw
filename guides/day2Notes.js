console.log("Heyyyyy")
console.log(NaN)
console.log(typeof NaN) // says it is a number lmao

console.log(NaN === NaN) // says false lmao

// object, classes, event loops

/* OBJECTS (DICT)
object - {key: 'value'}
vs.
object prototype - reference to a class

// typescript can make js an oop language
*/

//simple object

let animal = {
    animalName : "Bald Eagle",
    age: 21,
    color: "Brown"
}
console.log(animal)

// access values with bracket notation

console.log(animal['age'])

// or with dot notation (issue with number being a key)

console.log(animal.age)

// add key-value pairs to object

animal.height = "36 inches";
animal['sass'] = "spicy"
console.log(animal)

animal.height = 38.45

console.log(animal)


// delete key from object

delete animal.sass
console.log(animal)

let animals = {
    eagles: {
        'Bald': {
            colors : ['Brown', 'White'],
            flight: true,
            wingspan: 72
        },
        'Golden': {
            colors: ['Brown', 'Black', 'Gold'],
            flight: true,
            wingspan: 84
        }
    }
}

// class exercise 2
// print off all colors of the bald eagle individually

console.log(animals['eagles']['Bald']['colors'][0])
console.log(animals.eagles.Bald.colors)


// for of = loop thru index, for in = values
//loop thru list
for (x of animals.eagles.Bald.colors){
    console.log(x)
}

// loop thru dict

for (prop in animals.eagles){
    console.log(prop)
}

// .keys(), .values(), .items() - python

// Object.keys, none for .items() but can do manually

console.log(Object.keys(animals))
console.log(Object.values(animals))

// custom object prototypes AKA CLASSES

// custom object prototypes
// 3 different ways

//self = this and replace comma with semicolon

// 1. function based object

function Dog(name, breed, color, tail=true){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.tail = tail;

    //print info created as a function
    this.printInfo = function(){
        console.log(`This is a ${color}, ${breed}, named ${name}.`)
    };
    // if adding another method, add here
}

console.log()

let pup = new Dog('Rufus', 'Mutt', 'Brown/White', false)

pup.printInfo()
console.log(pup)

// 2. class based object, no need for parameter bc of constructor
// constructor - same as init statement

class DogClass{
    constructor(name, breed, color, tail=true){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.tail = tail;
    }
    printInfo(){
        console.log(`This is a ${this.color} ${this.breed} named ${this.name}.`)

    }
}

let new_pup = new DogClass('Spot', 'Pit', 'Brindle', false)
new_pup.printInfo()

// inheritance via class based objects
//extends
//super() method pulls downs any info from classes above it
//can add attributes below it

class Pug extends Dog{
    constructor(name, breed, color, tail=true){
        super(name, breed, color, tail=true);
        this.lazy = 'super';
        this.lazyFactor = 0
    }
    noise(){
        console.log('SNORT');
        this.lazyFactor += 10;
        console.log(`How lazy is this pug? ${this.lazyFactor}`)
    };
}

let puggy = new Pug('Paul', 'Pug', 'Black')
puggy.printInfo()
console.log(puggy.noise)
puggy.noise()
puggy.noise()
puggy.noise()
puggy.noise()


// arrow function for methods
// syntax () => {}

function DogArrow(name, breed, color, tail=true){
    this.name = name;
        this.breed = breed;
        this.color = color;
        this.tail = tail;

        this.printInfo = () => {
            console.log(`This is a ${this.color} ${this.breed} named ${this.name}.`)

        }
}

let nex_pup = new DogArrow('Lassie', 'Sheepdog', 'White/Brown', true)
nex_pup.printInfo()

// EVENT LOOP (makes sense with DOM manipulation)

// how many threads of execution are there
// think if there are 3 js scripts next to each other, they will all
// run concurrently at the same time
// but js is single threaded, runs top to bottom running one thing at a time
// but mimics multi threaded via event loop
// first compiles at run time (before running script) by omitting white space
// grabs all functions first to the top and then runs the script


//CALLBACKS

// everything in js in an object incl functions
// wc means we could pass functions into functions
// or have functions returned from a function 

// high order function is one that has a func passed into it as an argument

// ie) in python - map, filter, reduce, sort

// the classic example - cooking frozen pizza
// goal is to eat the pizza (last) but before that
// preceded by cooking, preceded by placing pizza in oven, etc
// preheat the oven, unwrap pizza, buy pizza (first)

let first = () => {
    setTimeout(()=>console.log('First!'), 5000)
}

let second = () => {
    console.log('second')
}

let third = () => {
    console.log('Third?')
}


first(); // outputs last
second(); // outputs first
third(); // outputs second

//alert function pops up in browser

let attendClass = (subject, callback) => {
    alert(`Attending ${subject} class!`);
    callback();
}
let endClass = () => {
    console.log('Class over')

}

attendClass('HTML', endClass);

// issue arising from above, nested functions aka callback hell
// func1 (()=>){
//    func2(()=>){

//     }
// }

// js solution to callback hell is PROMISES think: IOU
// 2 arguments - resolve and reject
let isEven = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0){
            resolve(num);
        } else {
            reject(num);
        }
    })
}

// dealing with a Promise
// .then() method handles the resolve path
// .catch() method handles the reject path

// note: common to see .then().then().then().catch()

console.log(isEven(2))
isEven(5).then( (result) => {
    console.log(`Even number ${result}`)
}).catch( (result) => {
    console.log(`Nope, odd number ${result}`)

})

//save to variable also can do

let oddity = isEven(7).then( (result) => {
    console.log(`Even number ${result}`)
}).catch( (result) => {
    console.log(`Nope, odd number ${result}`)

})

// ASYNC/AWAIT SYNTAX


let increasesSlow = (base, increase) => {
    return new Promise( (resolve) => { setTimeout( () => resolve(base + increase), 3000)})}

// tell js to wait before running script with async until await is fulfilled

let raise = async (salary, raise) => {
    let new_salary = await increasesSlow(salary, raise);
    console.log(`Congrats on your raise; you now make ${new_salary}`);
}

raise(50000, 65000)

// JS CLOSURE - uncommon to use but good to know
// dealing with private variables
// closure is a self invoking function that can then be set to a variable
// and return a function expression

let countUp = ( function(){
    let counter = 0; // private variable only accessible by calling func
    return function () {console.log(counter++)}
})()

countUp();
countUp();
countUp();
countUp();
countUp();

let addNames = ( () => {
    let names = [];
    console.log('adding names');
    return (name) => {
        names.push(name);
        console.log(names)
    }
})()

addNames('Brandt')
addNames('Bubu')
addNames('Bryce')
console.log(names) // line will error but everything else will run; beauty of js!