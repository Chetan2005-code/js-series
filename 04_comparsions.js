//Comparsion and confusion For interview puropse can be asked 
//This is an same datatype comparsion 
console.log(2>1);//get simple value in true or false 
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

//Different datatype 
console.log("2">1);//here the string get automatic convert to number for comparsion true
console.log("02">1);//here the string get automatic convert to number for comparsion true 
console.log("2"<1);//false

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true this types of code create confusion and sugestion always avoid these type of code 
/*Reason here for null>0 false ,null==0 false and null>=0 true 
equality check == and comparisons >,<>,>=,<= work differently
comparsions convert null to a number, treating it as 0
that's why null>=0 gives true but null>0 is false  */
 

console.log(undefined<0)//false
console.log(undefined==0)//false
console.log(undefined>0)//false this types of code create confusion and sugestion always avoid these type of code
//always do clean code 

// strict check by (===)
console.log("2"=== 2);//by strict check now it also check wether the datatype is same or not 
