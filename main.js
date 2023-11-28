//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

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

for(const [key, value] of Object.entries(person3)) {
    if (Array.isArray(value)) {
        console.log(`${key}:`)
        value.forEach(thing => console.log(thing))
    }else {
        console.log(`${key}: ${value}`)
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

   


    // Use an arrow to create the printInfo method
    printInfo = () => {
        return `Name: ${this.name} \nAge: ${this.age}`
    }


    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    ageUp = () => {
        return function(){
            console.log(this.age)
            return age++
        }
    }
}

person1 = new Person()
person2 = new Person()

person1.printInfo()
person2.ageUp()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const whatLength = (string) => {
    return new Promise((resolve, reject) =>{
        if (string.length > 10){
            resolve(string)
        }else{
            reject(string)
        }
    })
}

whatLength("Hippy")
    .then((result) => {
        console.log("Big word")
    })
    .catch((error) => {
        console.log("Small Number")
    })




// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

const reverse = (string) => {
    return string.split("").reverse().join('')
}


// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let points = 0
    for(let i = 0; i < 10; i++){
      if(games[i][0] > games[i][2]){
        points = points + 3
      }else if (games[i][0] < games[i][2]){
        points = points + 0
      }else{
        points = points + 1
      }
    }
    return points
  }