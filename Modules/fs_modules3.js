const fs = require('fs')
//read data from text file using synchronous function
var mydata = fs.readFileSync('data.json','utf-8')
console.log(mydata);
console.log(typeof mydata);