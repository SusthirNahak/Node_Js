// import path from 'path'

// //current working dir
// console.log(path.join(process.cwd()));

const path =require("path") 
    console.log(__filename);
    console.log(__dirname);
    //it returns base name
    console.log(path.basename(__filename));
    console.log(path.basename(__dirname));
// to return the original string
console.log(path.format(path.parse(__filename)));