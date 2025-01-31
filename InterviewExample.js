// Q. Let a =[1,2,3]
//    Let b = [ 4,5,6]
//    Let c = copy a and b
//    [...a, ...b] what is the output 
//    [a,...b] 

let a = [1, 2, 3];
let b = [4, 5, 6];

// Copy and merge a and b
let c = [...a, ...b]; 
console.log(c); // Output: [1, 2, 3, 4, 5, 6]

let d = [a, ...b]; 
console.log(d); // Output: [[1, 2, 3], 4, 5, 6]
