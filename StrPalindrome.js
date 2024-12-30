function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, ""); // Optional: Ignore case and spaces
    return str === str.split("").reverse().join("");
}
let input = prompt("Enter a string to check palindrome: ");

if(isPalindrome(input)){
    console.log("Palindrome");
}else{
    console.log("not a Palindrome String");
}
