function findSubstrings(str) {
    const substrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }
    return substrings;
}
console.log(findSubstrings("abc")); 
// Output: [ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]
