const fs = require('fs'); // module of nodejs

const arguments = process.argv;
// const arguments = 'C:\\Users\\OPC-CCQL\\Desktop\\try.txt';

const file = fs.readFileSync(arguments[2]).toString().split('\n');
// const file = fs.readFileSync(arguments).toString().split('\n');

console.log(file.length-1);

