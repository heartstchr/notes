var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var db;
var mongoUrl = "mongodb://localhost:27017/sooryen"
// Initialize connection once
MongoClient.connect(mongoUrl, function(err, database) {
    if(err) return console.error(err);
    db = database;
    console.log(mongoUrl)
});

module.exports= db;