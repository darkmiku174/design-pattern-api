import mongoose from 'mongoose';
import keysSchema from './subGameKeysSchema';
import urlSchema from './subGameUrlSchema';

var gameSchema = new mongoose.Schema({
    name: String,
    short_name: String,
    type: String,
    brief: String,
    description: String,
    developer: String,
    publisher: String,
    release_date: Date,
    platform: String,
    purchase_price: Number,
    sale_price: Number,
    tag: Array,
    keys: [keysSchema],
    images: [urlSchema],
    videos: [urlSchema],
    includes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
    }],
    included_in: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
    }],
}, {
    timestamps: true,
    versionKey: false
})

const Game = mongoose.model("Game", gameSchema, "games")

export default Game