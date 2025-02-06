function twoSum(nums, target) {
    let numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return indices
        }
        numMap.set(nums[i], i); // Store number and index
    }
    return []; // Return empty array if no solution found
}

// Example Usage
let nums = [2, 7, 11, 15];
let target = 9;

let result = twoSum(nums, target);
console.log("Indices:", result); // Output: [0, 1]
