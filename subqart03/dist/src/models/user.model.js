import mongoose from 'mongoose';
const userModel = new mongoose.Schema({
    username: { type: String },
    firstname: { type: String },
    lastname: { type: String }
});
export default mongoose.models.users || mongoose.model('user', userModel);
