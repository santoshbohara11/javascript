// console.log("start")



// const timerId=setTimeout(()=>{
// console.log("processing")
// },2000)

// console.log(timerId)
// console.log("end")


// function first (callback){
//     setTimeout(()=>{
//         console.log('first task')
//         callback()
//     },1000)
// }
// function second (callback){
//     setTimeout(()=>{
//         console.log('secondtask')
//         callback()
//     },1000)
// }
// function third (callback){
//     setTimeout(()=>{
//         console.log('third task')
//         callback()
//     },1000)
// }
 

// first(()=>{
//     second(()=>{
//         third(()=>{
//             console.log("done")
//         })
//     })
// })


//promice (it is an simple object which represent thecomplition/ filuare of asyncronous)

// const promice =new promise ((resolve,reject)=>{
//         let sucess =true 
//         setTimeout(()=>{
//             if (sucess){
//                 resolve('data loaded')
//             }else{
//                 reject('data fetch failed')
//             }
//         },2000)
// })
// console.log(promise )








//async await (it is used to paused the execution of program)

function api(){
     return new  Promise ((resolve,reject)=>{
          setInterval(()=>{
                console.log("weather data")
                resolve(200)
          },2000)
     })
}

async function getweatherdata(){
     await api();
     await api();
}

function getdata (dataid,getnextdata){
   setTimeout(()=>{
    console.log("data:",dataid)
   if ( getnextdata){
      getnextdata()
   }
   },2000)
}
//callback hell//nested callback which is like a pyramid which are difficult to change 
getdata(1,()=>{
    console.log("data from the 2....")
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4)
        })
    })
})



//promises //it is an object of js which is the solution of callback hell

// eventual completion of task 
let  promise  = new Promise ((resolve,reject)=>{
       console.log("i am a promise....")
    //    resolve ("success")
       reject("some error occured")
})

function getdata (dataid,getnextdata){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data:",dataid)
        resolve("sucess...")
       if ( getnextdata){
          getnextdata()
       }
       },3000)
   })
}

async function getalldata(){
    console.log("getting data1.....")
    await getdata(1)
    console.log("getting data2.....")
    await getdata(2)
    console.log("getting data3......")
    await getdata (3)

}
getdata(1).then((res)=>{
   return getdata(2)
})
.then((res)=>{
    return getdata(3)
})
.then((res)=>{
    console.log("success....")
})


//promise chaining 

function asyncfunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(" data1")
            resolve("sucess")
        },4000)
    })
}
function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(" data2")
            resolve("sucess")
        },4000)
    })
}


console.log("fetching from data 1...")
asyncfunc1() .then((res)=>{
    console.log("fetching data from the data 2....")
         asyncfunc2().then((res)=>{})
})


