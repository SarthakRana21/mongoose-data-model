import mongoose from 'mongoose';

interface IUser extends mongoose.Document{
    userName: string,
    email: string,
    password: string,
}

const userSchema = new mongoose.Schema<IUser>({
    userName: { type: String, required: true, unique: true, lowercase: true},
    email: { type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true}
}, {timestamps: true})

export const User = mongoose.model('User', userSchema)