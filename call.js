
//call function
let userdetail = {
    name:"avani",
    age:21,
    destination:"Employee",
    //printdetails:function(){
 //console.log(this)
  //console.log(this.name);
   // }
}
//userdetail.printdetails();

let user=function(){
console.log(this.name);
}

user.call(userdetail);


let userdetail2 = {
    name:"atharv",
    age:28,
    destination:"Employee"
}
//function  borrowing
//userdetail.printdetails.call(userdetail2)
user.call(userdetail2);


