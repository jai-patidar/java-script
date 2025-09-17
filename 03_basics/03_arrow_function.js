const user = {
    username : "jai",
    price : 1000,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "bantu"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "jai"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "jai"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "jai"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "jai"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
