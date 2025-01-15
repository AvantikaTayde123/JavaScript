function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}
let num = parseInt(prompt("Enter a number to calculate its factorial:"));
if (isNaN(num)) {
    console.log("Please enter a valid number.");
} else {
     console.log(`Factorial of ${num} is ${factorial(num)}`);
    
}
