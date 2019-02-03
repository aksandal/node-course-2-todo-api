const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (err, client) => {

    var db = client.db('TodoApp');

    if (err) {
        return console.log('Unable to connect to mongodb');
    }


     db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }).catch((err)=>{
        console.log(err);
    }) 
 

/*     db.collection('Todos').find().count().then((count)=>{
        console.log(`total count:${count}`);
        //console.log(JSON.stringify(docs,undefined,2));
    }).catch((err)=>{
        console.log(err);
    })
 */

    /* db.collection('Users').find({name:"Akshay"}).count().then((count)=>{
        console.log(`total count:${count}`);
        //console.log(JSON.stringify(docs,undefined,2));
    }).catch((err)=>{
        console.log(err);
    }) */

    
    //client.close();
})

