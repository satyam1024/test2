const express= require("express");
const app = express();
const bodyParser =require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("result is "+result);
    console.log(req.body);
})
app.listen(3000,function(){
    console.log("port is on 3000")
});