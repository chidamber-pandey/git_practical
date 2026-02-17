let http = require('http');
let server =http.createServer((req,res)=>{
    res.write("learning http server");
    res.end();

})


server.listen(3000,()=>{
    console.log("app is running at port 3000");
})
