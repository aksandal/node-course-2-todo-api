const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (err, client) => {

    var db = client.db('TodoApp');

    if (err) {
        return console.log('Unable to connect to mongodb');
    }


    //deleteMany
/*     db.collection('Todos').deleteMany({text:'Eat lunch'}).then((res)=>{
        console.log(res);
    });
 */
    //deleteOne

    /* 
    db.collection('Todos').deleteOne({text:'Eat lunch'}).then((res)=>{
        console.log(res.result);
    }); */

    //findOneAndDelete

    db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
        console.log(res);
    });
    
    //client.close();
})

