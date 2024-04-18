
const fs = require('fs')
//read data from text file using synchronous function
var mydata = fs.readFileSync('data.txt','utf-8')
console.log(mydata);
//read data from text file using asynchronous function
fs.readFileSync('data.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data);
})