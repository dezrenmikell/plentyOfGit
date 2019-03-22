const mongoose = require('./connection')
const Schema = mongoose.Schema

const StuffSchema = new Schema({
    title: {
        type: String,
        default: 'New Title'
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

const UserSchema = new Schema({
    
    title: String,
    userName: String,
    password: String,
    stuffs:[StuffSchema],
    posts:[StuffSchema]
})
module.exports = {
    StuffSchema: StuffSchema,
    UserSchema: UserSchema
}