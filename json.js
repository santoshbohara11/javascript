// const getData =async(id)=>{
//     try {
//         const response = await fetch()

//     } catch (error) {
        
//     }
// }

// //promise 

// function getdata (id){
//     if (!id){
//         console.log("id is requred")
//         return 
//     }
//     fetch ()
//     console.log(response.ok){
//         throw new error ("somethings went wrong")
//     }
//     return response.json()
// }




const res = fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=> {


    response.json()).then((data)=>console.log(data)).catch(err)=>console.log(err)





