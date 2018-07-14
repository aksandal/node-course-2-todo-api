var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

/* var Todo=mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
})

var newTodo=new Todo({
    text:'Cook Dinner'
});

var otherTodo=new Todo({
    text:'Cook Dinner',
    completed:true,
    completedAt:12424
});

newTodo.save().then((doc)=>{
console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
console.log(e);
}) */




var Users=mongoose.model('Users',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }

})


var newUser=new Users({
    email:"123@example.com"
});

newUser.save().then((doc)=>{
console.log(JSON.stringify(doc,undefined,2));
},(err)=>{

    console.log(err);
})