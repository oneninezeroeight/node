const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = '1908';
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    // console.log("Connected successfully to server");
    const db = client.db(dbName);
    db.collection('students').find().toArray(function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        console.log(result[0].name);
    });
    client.close();
});