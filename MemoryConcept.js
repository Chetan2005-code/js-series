/*How Memory Allocation work in Javascript*/
/*There are Two types of Memory 
1) Stack Memory- All the Primitive data type  use stack memory
.When Stack memory used >as you create the variable it give copy for further changes. 
If you have to make an  change it can be done in that copy.

2) Heap Memory - All the Non-Primitive data type use heap memory
When memory define in heap . It give the reference means any changes will be at original vlaue.

Example: Stack Memory*/
let mytwitterId="Chaitanya Verma"
let anotherId=mytwitterId
anotherId="Chetan verma"
console.log(mytwitterId)//chaitanya verma
console.log(anotherId);//chetan verma this show it make the copy of variable as 
//I change in anotherId but it did not change in the original mytwitterId

//Example: Heap Memory
let userone ={
    email:"Rohan@gamil.com"
}
let userTwo=userone
// console.log(usertwo)//as now the value in userTwo get the same reference from userone(object)
userTwo.email="Nitesh@gmail.com"
console.log(userone.email);//Nitesh@gamil.com
console.log(userTwo.email);//Nitesh@gamil.com
//In both the case result get change when userTwo get Modified 
//which mean they get same memory from heap 


