let express=require(express);
let app=express();
let path=require('path');
app.set('view engine',"ejs");
app.set('views',path.join(__dirname,'views'));

app.get('/submit',(req))