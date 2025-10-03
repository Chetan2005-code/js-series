/*From Interview Purposes 

If Ask in Interview How data be put in memory and get excess on that bases 
there are two category of datatype 

1. Primitive Datatype(call by value - means when data be shared it will be copy.
As certain changes can be there it will happen in that copy data   )
There consist of 7 types : String,Number,Boolean,null,undefined,Symbol(it is used to make an value be Unique), BigInt

Examples:

let score=33
let str1="chetan"
let isloggedIn= true
let stage;//give undefined as output
let play = null

let Id=Symbol('123')
let anotherId =Symbol('123')
Is there Id and anotherId same?
console.log(Id===anotherId)//false so the value can be same but Id be different 


2. Non-Primitive Datatype(call by Reference )
Array,objects,Functions

Examples:
const heros =["Iron man","Captain America","Thor"];//array can be create 

let myobj={   //under this parenthesis it is object can be store in variables 
name:"chetan",
age: 19,
}

const myFunction = function (){
console.log("hello world")
}

(the datatype of  all non-primitive like array and function is actually object
for function it is called as function-object )

Is Javascript Dynamic key type language?

JavaScript is a Dynamic (loosely typed) language ✅
(It does not require you to define a variable’s type explicitly; types are determined at runtime.)
Examples are 
let score = 33 //in this no datatype mention if it change to string 
let score ="33"// that show that js is dynamic Language
*/