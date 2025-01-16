function flattenArray(nestedArray) {
  const result = [];
  
  nestedArray.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item)); // Recursively flatten and spread into result
    } else {
      result.push(item);
    }
  });
  
  return result;
}
const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); 

// Output: [1, 2, 3, 4, 5, 6]
