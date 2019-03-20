const mongoose = require('../db/connection');
const Schema = mongoose.Schema

const Stuff = new Schema({
    name: String,
    stuffId:  Number,
    description: String,
    author:{
        type: Schema.Types.ObjectId,
        ref: "User",
        myStuff:[]
    },
    likers:[],
    category:[]
})

module.exports = mongoose.model('Stuff',Stuff)