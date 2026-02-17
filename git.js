let fs = require('fs/promises');
let path =__dirname+'/b.txt';

fs.writeFile(path,"learning fs/promises module ")
.then(()=>{
    console.log("done")

})
.catch(()=>{
    console.log(err)

})

