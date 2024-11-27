//add element at begining
// arr.unshift(7);
// console.log(arr);
arr=[8,9,10,13,16,9];
// arr.length=4;
for(let n =arr.length; n>0;n--){
    arr[n] = arr[n-1]
}
arr[0]=7

console.log(arr);

