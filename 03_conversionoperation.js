//Datatype conversion 

let score = "33"
console.log(typeof score);
console.log(score);

let valueInNumber = Number(score)//by mention NUmber it gives guarantee it convert string to number datatype 
console.log(typeof valueInNumber);
console.log(valueInNumber);//after conversion it convert to number but result is not same value you get is NaN(not a number)
// outputs of different cases "33" => 33
// "33abc"=> NaN(not a number)
//null => 0
//true = 1 , false = 0
//undefined = NaN

let isloggedIn = null;//is in number
let booleanisloogedIn = Boolean(isloggedIn)//this will convert this to boolean datatype
console.log(booleanisloogedIn)

/*
outputs of given test case 
1 => true , 0 => false
"" =>false
"chetan"=>true
 */

let somevalue = 47//given number
let StringNmuber = String(somevalue);//convert to string 
console.log(StringNmuber)//47
console.log(typeof StringNmuber)// type consider will be string