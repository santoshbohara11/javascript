//scope (global scope ,function/local scope ,block scope and lexical scope)


//global scope 

let  x=90;

console.log(x)

if(true){
    console.log(x)
}

function global(){
    console.log(x)
}

global(x)


//local/function scope 

// var is a function scope  

// let and const are a block scope 

function harry(){
    let x=10;

    if (true){
        console.log(x)
    }
}


// harry()

//block scope 


if(true){
    let x=20
    const y=90
    // var z=8
    console.log(x)
}
 
// console.log(z)  var can be access outside the block so it is called an function scope

// lexical scope 

function parent(){
    var x=10;
    console.log(x)
    function child(){
        console.log(x)
        function third ( ){
            console.log(x)
        }
        third()
    }
    child()
}

parent()


//scope chaining 









