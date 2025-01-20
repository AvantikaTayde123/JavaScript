function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;

    // Traverse the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // Swap non-zero element with the element at nonZeroIndex
            let temp = arr[i];
            arr[i] = arr[nonZeroIndex];
            arr[nonZeroIndex] = temp;

            // Increment the nonZeroIndex
            nonZeroIndex++;
        }
    }
}

// Test the function
let arr = [0, 1, 0, 3, 12];
moveZerosToEnd(arr);

// Print the result
console.log(arr);

