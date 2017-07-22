var bodyparser=require('body-parser');
var mongoose=require('mongoose');

mongoose.connect('mongodb://suhas:test@ds059634.mlab.com:59634/todo1');

var todoschema=new mongoose.Schema({
    item:String
});

var Todo=mongoose.model('Todo',todoschema);

//var itemone=Todo({item:'buy something'}).save(function(err){
  //  if(err) throw err;
    //console.log('item saved');
//});

var urlencoderparser=bodyparser.urlencoded({extended: false});

//var data=[{item:"milk"},{item:"do math"},{item:"do aws"}];

module.exports=function(app){
    
    app.get('/todo',function(req,res){
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{todos:data});
        });        
        
    });
    
    app.post('/todo',urlencoderparser,function(req,res){
        
        var iteminsert=Todo(req.body).save(function(err,data){
            if (err) throw err;
            res.json(data);
        });
       
    });
    
    app.delete('/todo/:item',function(req,res){
        
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });
        //data=data.filter(function(todo){
          //  return todo.item.replace(/ /g,"-") !== req.params.item;            
        //});
        //res.json(data);
        
    });
};