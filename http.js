let fs = require('fs');
let path =__dirname+'/a.text';

fs.writeFile(path,"learning fs module writefile",(err)=>{
    if(err)
        console.log(err)
    else
        console.log("done successfully....")
})
