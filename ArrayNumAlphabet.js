const mixedArray = [1, 'a', 2, 'b', 3, 'c', 4, 'd'];
const numbersArray = [];
const alphabetsArray = [];

mixedArray.forEach(item => {
  if (typeof item === 'number') {
    numbersArray.push(item);
  } else if (typeof item === 'string') {
    alphabetsArray.push(item);
  }
});

console.log("Numbers Array:", numbersArray);  // [1, 2, 3, 4]
console.log("Alphabets Array:", alphabetsArray);  // ['a', 'b', 'c', 'd']
