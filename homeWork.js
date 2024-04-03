//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// loop thru dict

// for (prop in animals.eagles){
//     console.log(prop)}

// // .keys(), .values(), .items() - python

// // Object.keys, none for .items() but can do manually

// console.log(Object.keys(dictionary))
// console.log(Object.values(dictionary))


function favorites(object){
    return Object.values(object)
}

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(favorites(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 EACH TIME THE METHOD IS CALLED
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype  (function based object)

function Person(name, age){
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method

    this.printInfo = ()=>{
        console.log(`This is ${this.name} who is ${this.age} years old.`)
    };

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 

    this.yearOlder = (age)=>{
        this.age += 1;
    };

    this.threeYearsolder = ()=>{
        this.yearOlder();
        this.yearOlder();
        this.yearOlder();

    }
}

let fry = new Person('Frylock', 120)
let meat = new Person('Meatwad', 80)

fry.printInfo()
meat.printInfo()

fry.yearOlder()
fry.yearOlder()
fry.yearOlder()

fry.printInfo()

meat.threeYearsolder()
meat.threeYearsolder()
meat.threeYearsolder()

meat.printInfo()



// =============Exercise #3 ============//
/*

    Create a Promise based function that will check a string to determine 
    if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let howLong = (string) => {
    if (string.length > 10){
        console.log("Big word")
    } else {
        console.log("Small Number")
    }
}

howLong("Depeche  ")
howLong("My Sherona Mamama My My my my yahowww")

// howLong("Depeche").then( (result) => {
//     console.log(`Big number ${result}`)
// }).catch( (result) => {
//     console.log(`Nah, small word ${result}`)
// })