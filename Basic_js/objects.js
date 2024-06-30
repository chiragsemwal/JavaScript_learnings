// object literals 

const myobj = {
    name : "Chirag",
    age : 19,
    location : "Haryana",
    email : "chiragsemwal@gmail.com",
    isLoggedin : true,
    LastLoginDays : ["Monday", "Sunday"]
}

// Accesing objects 

console.log(myobj.age);
console.log(myobj["email"]);


// Destructing objects

const self = {
    Myname : "Chirag",
    MyAge : 19
}

const {Myname : name} = self;

console.log(name);

