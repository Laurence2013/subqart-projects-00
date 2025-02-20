import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const mongoUrl = process.env.MONGO_URI as string;

const connectDB = async() => await mongoose.connect(mongoUrl).then(connection => {
	void connection;

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
mongoose.connection.on('connected', () =>  console.log('Mongoose connected to... ' + mongoUrl));
mongoose.connection.on('error', err => console.log('Mongoose connection error: ' + err));

// module.exports = connectDB;
export default connectDB;
