var bodyParser=require('body-parser');
var express=require('express');


var {Users}=require('./model/User');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./model/todo');


var app=express();


app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send('What the hello')
});

app.post('/todos',(req,res)=>{

    var todo=new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }).catch((err)=>{
        res.status(400).send(err);
    })

    //res.send("ddddd");
    console.log(req.body)
});

app.listen(3000,()=>{
console.log('starting at port 3000')
})


module.exports={app}