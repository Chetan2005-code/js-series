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


//**************************************OPERATIONS*********************************************** */
let value =3 
let negvalue = -value
console.log(negvalue);//-3

console.log(2+2)//Add
console.log(2-2)//Sub
console.log(2*2)//Multiply
console.log(2**3)//Power 2^3
console.log(4/2)//Divide
console.log(2%3)//Modulus

let str1 = "chetan"
let str2=  " Verma"
let str3= str1 +str2
console.log(str3)// chetan verma 

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2+2)//1222(when string get first palce for addition it treat rest of all numbers as string or convert them to string  )
console.log(1+2+2+2+"2")//72(when string get last the preivous numbers get additon and give result=72)

console.log((3+4)*5%3)//these are type to write an opeartion but not use in real world program 
//code don't look  feasible

console.log(+true)//1
console.log(+"")//0

let num1,num2,num3
num1 = num2 =num3 =2+2//this is ALSO an type to write opreation 

let gamecounter=100;
gamecounter++;//postfix
++gamecounter;//prefix
console.log(gamecounter)


//Prefix Increment Logic
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n

//Postfix Increment Logic
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n