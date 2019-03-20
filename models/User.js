const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    
    name: String,
    myStuff:[
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
