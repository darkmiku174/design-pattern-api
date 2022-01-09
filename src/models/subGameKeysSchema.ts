import mongoose from 'mongoose';

var keysSchema = new mongoose.Schema({
    code: String,
    status: String
}, {
    timestamps: true,
    versionKey: false
})

export default keysSchema