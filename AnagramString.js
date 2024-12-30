function areAnagrams(str1, str2) {
    const sorted1 = str1.split("").sort().join("");
    const sorted2 = str2.split("").sort().join("");
    return sorted1 === sorted2;
}

const str1 = prompt("Enter the first string:");
const str2 = prompt("Enter the second string:");

if (areAnagrams(str1, str2)) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}
