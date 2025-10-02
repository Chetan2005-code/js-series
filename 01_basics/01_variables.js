const accountId =1553
let accountEmail ="chtena@gmail.com"
var accountpassword ="123456"
accountCity ="Indore"//this is also an type to declare variable in js but it is risky one chance of memory loss 

/*
Prefer not to use var because of issue in block scope and functional scope 
which changes the value in main var 
*/


let accountState;//as you see when variable did't get any value it show undefined

//accountId=2 // it cannot change as const apply again and again data not change
// console.log(accountId);//use for single variable to show in output 


accountEmail ="mishra@gmail.com"
accountpassword ="123478"
accountCity ="Delhi"
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])//used for multiple varibles in tabluar form


/* output you get
┌─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ 1553               │
│ 1       │ 'mishra@gmail.com' │
│ 2       │ '123478'           │
│ 3       │ 'Delhi'            │
│ 4       │ undefined          │
*/