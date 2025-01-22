function removeDuplicates(array) {
    let temp = []; 

    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
      
        for (let j = 0; j < temp.length; j++) {
            if (array[i] === temp[j]) {
                isDuplicate = true;
                break;
            }
        }

        // If not a duplicate, add to temp
        if (!isDuplicate) {
            temp.push(array[i]);
        }
    }

    return temp;
}

// Example usage
let array = [1, 2, 3, 2, 4, 1, 5];
let uniqueArray = removeDuplicates(array);

console.log("Unique Elements:", uniqueArray);
