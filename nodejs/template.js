var express= require('express');
var bodyparser=require('body-parser');
var app = express();

app.set('view engine','ejs');

var urlencodedParser = bodyparser.urlencoded({ extended: false });


app.get('/',function(req,res){
//res.send('This is home page');
res.render('index');
});

app.get('/contact',function(req,res){
//res.send('This is contact page');
console.log(req.query);
var me=req.query;
res.render('contact',{me:me});
});

app.post('/contact',urlencodedParser,function(req,res){
console.log(req.body);
//var success=req.body;
res.render('contact-success',{data:req.body});
});



app.get('/profile/:id',function(req,res){
var obj={age:25,studentId:01116054,skills:['c','c++','c#']};
//res.send('you are seeing the profile of id: ' + req.params.id);
res.render('profile',{student:req.params.id,data:obj});
});
app.listen(5000);
