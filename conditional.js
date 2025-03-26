//control flow

//if,else if ,else // condition  


// const age =67;

// if(age ===13){
//     console.log("Running......")
// }

// else if(age>13)
// {
//     console.log("you are in else if block....")
// }

// else {
//     console.log("not running.....")
// }

//switch case 




// const fun1=(day)=>{




//     switch (day){
//         case 1:
//         case 7:
//            console.log("weekend")
//            break;
//        case 2:
//        case 3:
//         case 4:
//         case 5:
//         case 6:
//            console.log("workday")
//            break;
   
//     //    case 3:
//     //        console.log("workday")
//     //        break; 
           
//        default:
//            console.log("enter the valid number")
           
//    }

// //    if (day===1||day==7)
// //    {
// //     console.log("weekend day")
// //    }
// }
// fun1(9)

//ternary operator 

// const score=50

// console.log(score>=80? "a+":score<=40?"pass":"fail")


//loop 


// for (let i=0;i<=10;i++){

//     if(i%2===0){
//         continue;
//     }
//     console.log(i)
// }
// console.log("end")

//while loop 

// let count=10 
//  while (count>0)
//  {
//     console.log(count)
//     count--
//  }
//  // do while 

//  do {
//     console.log(count)
//     count--
//  }while(count>0)

//for of loop 
// const arr=[1,2,3,4,5]
// for( number of arr){
//     console.log(number)
// }
//for in loop

const person={
    name:`santosh`,
    age:22
}

for(key in person){
    console.log(key, `:`,person[key])
}