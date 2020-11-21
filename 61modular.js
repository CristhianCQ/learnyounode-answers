const  modularModule = require("./modularModule");

const [comman, jsFile, pathFile, extention]= process.argv;
// const pathFile = 'C:\\Users\\OPC-CCQL\\Desktop';
// const extention = 'txt';

modularModule(pathFile, extention, function(error, files) {

    if (error) {
        console.log('There is an error');
    }

    files.forEach(file => {
        console.log(file);
    });
});

