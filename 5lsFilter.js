const fs= require('fs');
const path= require('path');

const [comman, jsFile, pathFile, extention]= process.argv;

// const pathFile = 'C:\\Users\\OPC-CCQL\\Desktop';
// const extention = 'txt';

fs.readdir(pathFile, function (error, lista) {
    if (error) {
        console.log('Ocurrio un error');
    }

    const filesExtention = lista.filter(name => path.extname(name) == '.'+extention);

// console.log(filesExtention);

    filesExtention.forEach(file => {
        console.log(file);
    });
})
