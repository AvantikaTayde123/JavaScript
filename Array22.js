//Find the median of the array [1, 3, 5, 7, 9].
function median(arr){
//arr=[1, 3, 5, 7, 9];
for (let i=0; i<arr.length; i++){
    if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
}
const n=arr.length;
//check no of elements is odd or even
if(n%2===1){
    //odd
    return arr[Math.floor(n/2)];
}
else{
    const mid1=arr[n/2-1];
    const mid2=arr[n/2];
    return (mid1+mid2)/2;
}
}
arr=[1, 3, 5, 7, 9];
console.log("Median: " +median(arr));
