var bodyParser=require('body-parser');
var express=require('express');


var {Users}=require('./model/User');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./model/todo');


var app=express();

//middleware to make the incoming request to json object
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

app.get('/todos',(req,res)=>{

    Todo.find({text:req.body.text}).then((todo)=>{
        res.send({todo});
    }).catch((err)=>{
        res.send({err})
    })
})



app.get('/todos/:id',(req,res)=>{
        var id=req.params.id
        Todo.findById(id)
            .then((todos)=>{
                if(!todos){
                    return res.status(404).send()
                    //return console.log('no record found')
                }
                res.type('application/json')
                res.send({todos})
            })
            .catch((err)=>{
                res.status(404).send()
            })
        })

app.listen(3000,()=>{
console.log('starting at port 3000')
})


module.exports={app}