
function crrobo(name){
    return {
       name:name,
       talk :function(){
           console.log("my name is "+name+` robot`)
       }
    }
}

const robo1=crrobo("chitti")
robo1.talk()
const robo2=crrobo("chiiti 2.0")
robo2.talk()


//person 
const object=(name)=>{
return {
   name:name,
   say:()=>{
      console.log("my name is "+name)
   }
}
}


const funn1=object("tiger the jonty")
funn1.say
