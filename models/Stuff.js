const mongoose = require('../db/connection');
const Schema = mongoose.Schema

const Stuff = new Schema({
    name: {
        type: String,
        default: 'New Name'
    },
    stuffId:  Number,
    description: {
        type: String,
        default: 'New Description'
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User",
        myStuff:[]
    },
    likers:[],
    category:[]
})

module.exports = mongoose.model('Stuff',Stuff)