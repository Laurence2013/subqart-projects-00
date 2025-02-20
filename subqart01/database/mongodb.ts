import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { from } from 'rxjs';
import { tap, map } from 'rxjs/operators';

dotenv.config();

const connectDB = async() => await mongoose.connect(process.env.MONGO_URI)
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
mongoose.connection.on('connected', _ => console.log('Mongoose connected to... ' + process.env.MONGO_URI));
mongoose.connection.on('error', err => console.log('Mongoose connection error: ' + err));

module.exports = connectDB;
