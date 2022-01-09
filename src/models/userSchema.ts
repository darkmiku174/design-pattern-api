import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
    name: String,
    phone_number: String,
    email: String,
    birthday: Date,
    user_name: String,
    password: String
}, {
    timestamps: true,
    versionKey: false
})

const User = mongoose.model("User", userSchema, "users")

export default User
