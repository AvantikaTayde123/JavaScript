//check element 25 is present in the array
arr=[5,10,15,20];
let found=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]==25){
        found=1;
        break;
    }
}
if(found){
        console.log("Element found");
    }
    else{
        console.log("Element not found");
    }

