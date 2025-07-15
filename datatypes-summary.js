// Primitive

// 7 types : String, Number, Null, Undefined, Bigint, Boolean, Symbol

const score = 200
const scoreValue = 451.5

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 684144687454n



// Reference (Non primitives)

// Array, Objects, Functions

const heros = ["naagraj" , "doga"]

let myObj = {
    name: "Jay",
    age:22,
}

// const myFunction(){
//     console.log("Hello World");
    
// }


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Jai_lifts"

let anothername = myYoutubename
anothername = "chai" 

console.log(myYoutubename);
console.log(anothername);
 

let userOne = {
    email: "user761@email.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jai@email.com"

console.log(userOne);
console.log(userTwo);

