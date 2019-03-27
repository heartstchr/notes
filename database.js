// var mongodb = require('mongodb');
// var MongoClient = require('mongodb').MongoClient;
// var db;
// var mongoUrl = "mongodb://localhost:27017/sooryen"
// // Initialize connection once
// MongoClient.connect(mongoUrl, function(err, database) {
//     if(err) return console.error(err);
//     db = database;
// });
// console.log('db----->',db);

// module.exports= db;


const Mongoose = require('mongoose'),
	Config = require('config'),
	autoIncrement = require('mongoose-auto-increment'),
	mongoUrl = `mongodb://${
		Config.mongo.host
	}:${Config.mongo.port}/${Config.mongo.database}`;
console.log(mongoUrl);
Mongoose.connect(
	mongoUrl,
	{ useNewUrlParser: true }
);
var db = Mongoose.connection;
autoIncrement.initialize(db);
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
	console.log(`Connection with "${mongoUrl}" succeeded`);
});

exports = {
	Mongoose: Mongoose,
	db: db
};
