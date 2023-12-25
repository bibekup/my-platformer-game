//const tinderUsser = new Object();
const tinderUsser = {}

tinderUsser.id = "133duf"
tinderUsser.name = "Bibek"
tinderUsser.isLoggedIn = false

//console.log(tinderUsser);


const regularUser = {
     email : "some@gmail.com",
     fullname: {
        userfullname:{
            firstname:"bibek",
            lastname: "Upreti"
        }
     }


}

//console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2 :"b"}
const obj2 = {3: "a", 4 :"b"}


//const obj3 ={obj1, obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)