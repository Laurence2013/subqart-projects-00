const mongoose = require('mongoose');

const { from } = require('rxjs');
const { tap, map } = require('rxjs/operators');

const dbURI = 'mongodb://localhost:27017/testDb';

const connectDB = async() => await mongoose.connect(dbURI)
	.then(_ => {
		if(mongoose.connection.readyState === 0){
			console.log('NOT connected to MongoDB!');
		}
		if(mongoose.connection.readyState === 1){
			console.log('Connected to MongoDB!');
		}
		if(mongoose.connection.readyState === 2){
			console.log('Connecting to MongoDB!');
		}
	});

mongoose.connection.on('connected', _ => console.log('Mongoose connected to... ' + dbURI));
mongoose.connection.on('error', err => console.log('Mongoose connection error: ' + err));

module.exports = connectDB;
