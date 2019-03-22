const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    
    title: String,
    userName: String,
    password: String,
    stuffs:[
        {
            type: Schema.Types.ObjectId,
            ref: "Stuff"
        }
    ],
    posts:[
        {
            type: Schema.Types.ObjectId,
            ref: "Stuff"
        }
    ]
})

module.exports=mongoose.model('User', User)
