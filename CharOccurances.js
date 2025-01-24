function charCount(str) {
    const count = {};
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

// Example:
console.log(charCount("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
