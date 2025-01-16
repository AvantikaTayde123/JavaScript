function categorizeMultiples(numbers) {
  const output = {
    multipleOfTwo: 0,
    multipleOfThree: 0,
    commonMultiple: 0,
  };

  numbers.forEach((num) => {
    if (num % 2 === 0 && num % 3 === 0) {
      output.commonMultiple++; // Count numbers divisible by both 2 and 3
    } else if (num % 2 === 0) {
      output.multipleOfTwo++; // Count numbers divisible by 2 only
    } else if (num % 3 === 0) {
      output.multipleOfThree++; // Count numbers divisible by 3 only
    }
  });

  return output;
}
const numbers = [1, 2, 3, 4, 6, 9, 10, 12, 15];
console.log(categorizeMultiples(numbers));

//output: 
// {
//   multipleOfTwo: 5,
//   multipleOfThree: 3,
//   commonMultiple: 1
// }
