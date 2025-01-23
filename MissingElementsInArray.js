function findMissingElementsUsingLoop(completeArray, givenArray) {
  const missingElements = [];
  
  for (let i = 0; i < completeArray.length; i++) {
    // Check if the current element of completeArray is in givenArray
    if (!givenArray.includes(completeArray[i])) {
      missingElements.push(completeArray[i]);
    }
  }
  
  return { completeArray, missingElements };
}

// Example usage:
const completeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Complete array
const givenArray = [1, 2, 4, 6, 8, 10]; // Array with missing elements

const result = findMissingElementsUsingLoop(completeArray, givenArray);

console.log("Complete Array:", result.completeArray);
console.log("Missing Elements:", result.missingElements);
// Output:
// Complete Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Missing Elements: [3, 5, 7, 9]
