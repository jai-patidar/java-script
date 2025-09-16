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

console.log(this);
