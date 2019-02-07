const {ObjectId}=require('mongodb')

const {mongoose}=require('./../server/db/mongoose')
const {Todo}=require('./../server/model/todo')

const {Users}=require('./../server/model/User')


var id="5c56dd0d84dca342543b09fa2"
var user_id="5c56ba2472511334286f4cb9"


if(!ObjectId.isValid(id)){
    console.log('not a valid id')
}
//todo queries
Todo.find({
    _id:id
}).then((todos)=>{
    if(!todos){
        return console.log('no record found')
    }
    console.log(todos)
}).catch((err)=>{
    console.log('error occured while processing this request')
})



Todo.findById(id).then((todos)=>{
    if(!todos){
        return console.log('no record found')
    }
    console.log(todos)
}).catch((err)=>{
    console.log('error occured while processing this request')
})

Todo.findOne({
    _id:id
    }).then((todos)=>{
    if(!todos){
        return console.log('no record found')
    }
    console.log(todos)
}).catch((err)=>{
    console.log('error occured while processing this request')
})



//user quering

Users.find({
    _id:user_id
}).then((todos)=>{
    if(!todos){
        return console.log('no record found')
    }
    console.log(todos)
}).catch((err)=>{
    console.log('error occured while processing this request')
})



Todo.findById(user_id).then((todos)=>{
    if(todos.length==0){
        return console.log('no record found')
    }
    console.log(todos)
}).catch((err)=>{
    console.log('error occured while processing this request')
})

Todo.findOne({
    _id:user_id
}).then((todos)=>{
    if(!todos){
        return console.log('no record found')
    }
    console.log(todos)
}).catch((err)=>{
    console.log('error occured while processing this request')
})