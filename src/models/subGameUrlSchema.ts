import mongoose from 'mongoose';

var urlSchema = new mongoose.Schema({
    url: String,
    type: String
}, {
    timestamps: true,
    versionKey: false
})

export default urlSchema