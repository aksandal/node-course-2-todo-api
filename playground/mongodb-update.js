const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (err, client) => {

    var db = client.db('TodoApp');

    if (err) {
        return console.log('Unable to connect to mongodb');
    }

    /* 
        db.collection('Todos').findOneAndUpdate({ completed: false }, {
            $set: {
                completed: true
            }
        }, {
                returnOriginal: false
            }).then((res) => {
                console.log(res);
            });
     */
    db.collection('Users').findOneAndUpdate({ name: 'Jen' }, {
        $set: {
            name:"Akshay"
        },        
        $inc: {
            age: 1
        }
    }, {
            returnOriginal: false
        }).then((res) => {
            console.log(res);
        });

    //client.close();
})

