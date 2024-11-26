/ find the maximum length of word from Assignment2.txt file
import fs from "fs";
fs.readFile("./Assignment2.txt",'utf8',(err,data)=>{
    if(err){
        console.log('Error reading the file:', err);
        return;
    }

    let maxlength= 0;
    let longestWord = "";

data.split(' ').forEach((word)=>{
    if(word.length > maxlength){
        maxlength = word.length;
        longestWord = word;
    }
});
    console.log("Maximum Length of Word =", maxlength);
    console.log("Longest Word =", longestWord);
});
