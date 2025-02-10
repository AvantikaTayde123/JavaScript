function printAP(a, d, n) {
    let series = [];
    for (let i = 0; i < n; i++) {
        series.push(a + i * d);
    }
    console.log("AP Series: " + series.join(" "));
}

function sumAP(a, d, n) {
    return (n * (2 * a + (n - 1) * d)) / 2;
}

// Example usage
let a = 2, d = 3, n = 5;
printAP(a, d, n);
console.log("Sum of AP Series: " + sumAP(a, d, n));

// AP Series: 2 5 8 11 14
// Sum of AP Series: 40
