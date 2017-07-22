var express=require("express");
var todocontroller=require("./controller/todocontroller");

var app=express();

app.set("view engine","ejs");

app.use(express.static("./public"));

todocontroller(app);
app.listen(5000);
console.log("you are listening to port 5000");




