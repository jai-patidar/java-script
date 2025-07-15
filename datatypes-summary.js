// Primitive

// 7 types : String, Number, Null, Undefined, Bigint, Boolean, Symbol

const score = 200
const scoreValue = 451.5

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 684144687454n



// Reference (Non primitives)

// Array, Objects, Functions

const heros = ["naagraj" , "doga"]

let myObj = {
    name: "Jay",
    age:22,
}

const myFunction(){
    console.log("Hello World");
    
}