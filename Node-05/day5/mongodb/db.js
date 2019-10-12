const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = '1908';

// Use connect method to connect to the server
MongoClient.connect(url, {
        useNewUrlParser: true
    },
    function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        // 获取数据库db对象 必须sql语句
        const db = client.db(dbName);
        // 选中对应的集合
        const collection = db.collection('students');
        // 往集合加入三条数据
        // collection.insertMany([{
        //     a: 1
        // }, {
        //     a: 2
        // }, {
        //     a: 3
        // }], function (err, result) {
        //     assert.equal(err, null);
        //     assert.equal(3, result.result.n);
        //     assert.equal(3, result.ops.length);
        //     console.log("Inserted 3 documents into the collection");
        // });
        // 执行查找
        // collection.find({
        //     // 查找a为1的数据
        //     a: 1
        // }).toArray(function (err, docs) {
        //     assert.equal(err, null);
        //     console.log("Found the following records");
        //     console.log(docs)
        // });
        // 更新操作
        collection.updateMany({
            a: 1
        }, {
            $set: {
                b: 1
            }
        }, function (err, result) {
            assert.equal(err, null);
            assert.equal(2, result.result.n);
            console.log("Updated the document with the field a equal to 2");
        });
        client.close();
    });