let userdetail = {
    name:"avani",
    age:21,
    destination:"Employee",
    
}

let user=function(state,country){
console.log(this.name+" "+state+" "+country);
}

user.call(userdetail,"delhi","india");

let userdetail2 = {
    name:"atharv",
    age:28,
    destination:"Employee"
}
//multiple arrguments in array
user.apply(userdetail2,["delhi","india"]);

//bind
let newfun=user.bind(userdetail,"Indore","India");
console.log(newfun);


