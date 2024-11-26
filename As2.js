//count vowel words from data
import fs from "fs";
fs.readFile("./Assignment1.txt",'utf8',(err,data) =>{
    if(err){
   console.error('Error reading the file:', err);
   return;
    }

let count=0;
data.split(' ').forEach((val) =>{
    if(val[0] == 'a' || val[0] == 'e' || val[0] == 'i' || val[0] == 'o' || val[0] == 'u' 
        || val[0] == 'A' || val[0] == 'E' ||val[0] == 'I' || val[0] == 'O' || val[0] == 'U'){
            count++;
        }
});

console.log("Number of words starting with a vowel="+count)
});
