const mongoose = require('../db/connection');
const Schema = mongoose.Schema

const Stuff = new Schema({
    title: {
        type: String,
        default: 'New Name'
    },

    description: {
        type: String,
        default: 'New Description'
    },
    created:{
        type: Date,
        default: new Date()
    },
    likers:[],
    category:[]
})

module.exports = mongoose.model('Stuff',Stuff)