// import library express into the const express
const express = require('express');
 
const app = express();

const handler = (req,resp)=>{
    console.log(req.method);
    resp.send("Hello SEA");
    resp.send('handler');
}

app.get("/",handler);
 
app.get("/hello",(req,resp)=>{
    resp.send("Hello World");
}
 
app.listen(3000, ()=> {
    console.log('server running at port 3000');
});