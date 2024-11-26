//copy data from one file to another
import fs from 'fs';
fs.readFile("./Assignment3.txt",'utf8',(err,data)=>{
    if(err){
        console.log('Error reading the file:', err);
        return;
    }else{

    console.log('File content:', data);
     
    fs.writeFile("./Assignment4.txt", data, (err) => {
        if (err) {
            console.log('Error writing to the file:', err);
            return;
        }
        console.log('File copied successfully!');
    });
}
});
