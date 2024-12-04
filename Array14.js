//sort the array in ascending
let arr=[5,3,8,1,2];
let i,j,temp;
for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;

    }
}
}
console.log(arr);