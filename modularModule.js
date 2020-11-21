const fs= require('fs');
const path= require('path');

module.exports =  function(pathFile,extention, callback) {
     
    fs.readdir(pathFile, function(error, lista) {
        if (error) {
            callback(error,null);
        }
        else
        {
            callback(null, lista.filter(name => path.extname(name) == '.'+extention)); 
        }
    });    
}



