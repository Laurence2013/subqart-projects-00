import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
const test_connectDB = async () => {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, { dbName: "testingDb" });
    if (mongoose.connection.readyState === 0) {
        console.log('NOT connected to MongoDB!');
    }
    if (mongoose.connection.readyState === 1) {
        console.log(`MongoDB successfully connected to ${mongoUri}`);
    }
    if (mongoose.connection.readyState === 2) {
        console.log('Connecting to MongoDB!');
    }
};
mongoose.connection.on('connected', () => console.log('Mongoose connected...'));
mongoose.connection.on('error', err => console.log('Mongoose connection error: ' + err));
export default test_connectDB;
