//Find the mode of the array [2, 3, 2, 5, 2, 6, 2].
function findMode(arr) {
    let frequency = {};  
    let maxFreq = 0;     
    let modes = [];      
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        frequency[num] = (frequency[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, frequency[num]);
    }
    for (let num in frequency) {
        if (frequency[num] === maxFreq) {
            modes.push(Number(num));  
        }
    }
    return modes;
}
const array = [2, 3, 2, 5, 2, 6, 2];
console.log("Mode:", findMode(array)); 
