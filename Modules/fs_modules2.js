const fs = require('fs')
//read data from text file using synchronous function
var mydata = fs.readFileSync('data.txt','utf-8')
console.log(mydata);

//write the data to a new text file user.txt
fs.writeFileSync('user.txt',mydata)
console.log("data written successfully!");