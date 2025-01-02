function Sum(){
let sum=0;
  for(let i=1;i<=10;i++){
  let num = parseInt(prompt("enter a no: "));
  if(!isNaN(num))
    sum += num;
  }
  return sum;
}
console.log(Sum());
