//singleton

//object literals

const jsUser = {
    name : "Hitesh",
    age : 18,
    location: "Hetauda",
    isLoggedIn: false,
    lastLoginDays:["monday", "Tuesday"]
}

console.log(jsUser.age)
console.log(jsUser["name"])



jsUser.name = "Upreti"
//Object.freeze(jsUser)
jsUser.name = "Upreti1"

console.log(jsUser["name"])
console.log(jsUser)


jsUser.greeting = function(){
console.log("Hello js user");

}

jsUser.greeting1 = function(){
console.log("Hello js user,", jsUser["name"]);

}

console.log(jsUser.greeting());
console.log(jsUser.greeting1());