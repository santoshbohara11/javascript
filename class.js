// class person {
//    name;
//    age;
//    constructor(name,age){
//     this.name=name;
//     this.age=age;
//    }
//    greet(){
//     console.log("hello")
//    }
// }
// const user= new person("santosh",21)
// const user2=new person ("naresh",24)
// user.greet()
// console.log(user2)



//


class Account {
   name;
   #amount ;
   constructor (name ,initialamount=0){
      this.name=name;
      this.#amount=initialamount;
   }
  

   deposite(amount){
      if (amount<1000){
         console.log("more then 1000 only deposited..")
      }else{
         this.#amount+=amount;
         return this.#amount
      }
         
   }

    withdraw(amount) {
      if (amount <= 0) {
          throw new Error("Withdrawal amount must be positive");
      }
      if (amount > this.#amount) {
          throw new Error("Insufficient funds");
      }
      if (amount<1000)
      {
         throw new Error("withdrawan amount must be greater then the 1000")
      }
      this.#amount -= amount;
      return this.#amount;
  }
  
   getamount(){
      console.log(this.#amount)
   }
}

const account = new Account("santosh",1000)
account.getamount()

// account.deposite(40000)
// console.log("amount after deposite:")
// account.getamount()



account.withdraw(100)
console.log("amount after withdrawn from account:")
account.getamount()



