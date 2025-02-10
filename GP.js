function printGP(a, r, n) {
    let series = [];
    for (let i = 0; i < n; i++) {
        series.push(a * Math.pow(r, i));
    }
    console.log("GP Series: " + series.join(" "));
}

function sumGP(a, r, n) {
    return a * (1 - Math.pow(r, n)) / (1 - r);
}

// Example usage
let a = 2, r = 3, n = 5;
printGP(a, r, n);
console.log("Sum of GP Series: " + sumGP(a, r, n));

// GP Series: 2 6 18 54 162
// Sum of GP Series: 242
