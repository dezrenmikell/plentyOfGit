const mongoose = require('../db/connection');
const Schema = mongoose.Schema

const Stuff = new Schema({
    name: String,
    description: String,
    author: Number,
    likers:[],
    category:[]
})

module.exports = mongoose.model('Stuff',Stuff)