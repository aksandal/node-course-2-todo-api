var {Todo}=require('../model/todo.js')
var {mongoose}=require('../db/mongoose.js')


/*var newTodo=new Todo({
    text:"Akshay is goku"
})*/
//mongoose type cast any thing to specified type 
var newTodo=new Todo({
    text:true
})



newTodo.save().then((res)=>{
    console.log('Data saved',res)
},(err)=>{
    console.log(err);
})
