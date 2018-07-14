const { MongoClient, ObjectID } = require('mongodb');

//to generate object id 
/*var obj=new ObjectID();

console.log(obj);
*/
var Users = { name: "Akshay", age: 20 };

var { name } = Users;

console.log(name);
MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb');
    }

    console.log('Connected to mongodb');

    var db = client.db('TodoApp');
/* 
     db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,res)=>{
        if(err){
            return console.log('Unable to insert into database',err);
        }
        console.log(JSON.stringify(res.ops,undefined,2));
        
    });
     */



    db.collection('Users').insertOne({
        name: "Akshay",
        age: 23,
        Location: "Mumbai"
    }, (err, res) => {
        if (err) {
            return console.log('Unable to insert into database', err);
        }

        console.log(res.ops[0]._id.getTimestamp());
        //console.log(JSON.stringify(res.ops, undefined, 2));

    })
    client.close();


})


/*

3.0.0 and up using this syntax to connect and insert into mongo db
MongoClient.connect('mongodb://localhost', function (err, client) {
  if (err) throw err;

  var db = client.db('mytestingdb');

  db.collection('customers').findOne({}, function (findErr, result) {
    if (findErr) throw findErr;
    console.log(result.name);
    client.close();
  });
}); 


*/