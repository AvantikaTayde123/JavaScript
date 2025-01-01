function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log(`GCD is: ${a}`);
}
findGCD(56, 98);

