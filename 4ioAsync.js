const fs = require('fs'); // module of nodejs

const arguments = process.argv;
// const arguments = 'C:\\Users\\OPC-CCQL\\Desktop\\try.txt';

// const file = fs.readFile(arguments[2], (error, data) => {
fs.readFile(arguments[2], 'utf8',function(error, data) {
    if (error) {
        console.log('Error en el procesamiento'); 
    }
    
    console.log(data.split('\n').length-1);
}) 
