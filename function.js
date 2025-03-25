//block of code which can be reuseable

//named function


// const greet =function(name)
// {
//     console.log("hello",+ ''+name)
// }
// greet("kamal")

//expression function (anonomus funcion)
//arrow function 
//IIFE function
//genertaor 
//call back function  (most imortant)

// function*value(count){
//    while(true){
//     yield count++
//    }
// }
// const counter =value(0)
// console.log(counter.next().value)
// console.log(counter.next().value)


//named function

// function greet (name){
//    console.log("Hello",name)
// }

// greet('santosh')

//expression function(anonymus function)

// const greet =function(name){
//       console.log("hello",name)
// }
// greet('munni')



//Arrow function  

// const greet= (name)=>{
//    console.log("hello",name)
// }

// greet('czer')

// const add=(a,b)=> a+b

// console.log(add(2,4))



//immediately invoke function exuection(IIFE)

// (
//    function (name){
//       console.log("Hello",name)
//    }
// )('Naresh Bohara')

//adding using iife

// (function(a,b){
//    console.log("sum of two number is:",a+b)
// })(3,2);



//higher order function 

const multiply=(a)=>{
      return (b)=>{
         return (a*b)
      }
}

const mul5=multiply(5)

console.log(mul5(10))



//callback

// function greet(name){
//       console.log("Hello",name)
// }
// function goodbye(names,callback){
//          callback(names);
// }

// goodbye("Ab",greet)


const greet=(name)=> {
      console.log("Hello",name)
}

const fun1=(names,callback)=> {
      callback(names)
}

fun1("SANTOSH",greet)



