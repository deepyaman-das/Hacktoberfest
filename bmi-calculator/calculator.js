
const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.listen(port,function(){
    console.log("Server started at port "+port);
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var result = weight/(height*height);
    res.send("Your BMI is "+result);
});

app.post("/",function(req,res){
    var result = Number(req.body.num1)+Number(req.body.num2);
    res.send("result is "+result);
});