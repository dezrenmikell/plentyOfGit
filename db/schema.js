const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const IdeaSchema = new Schema({
    title: {
        type: String,
        default: 'New Title'
    },
    description: {
        type: String,
        default: 'New Description'
    },
    created: {
        type: Date,
        default: new Date()
    }
})

const UserSchema = new Schema({
    userName: String,
    password: String,
    ideas: [IdeaSchema]
})

module.exports = {
    IdeaSchema: IdeaSchema,
    UserSchema: UserSchema
}