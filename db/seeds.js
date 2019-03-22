require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Stuff = require('../models/Stuff')

User.deleteMany()
    .then(()=>{
        return Stuff.deleteMany()
    })
//create first User(planner)    
    .then(()=>{
        return User.create({
            title: "Tree",
            userName: "tree_login",
            password: "treepassword"

        })
    })
//create events for the first user ()   
    .then(tree=>{
        const stuff1Promise = Stuff.create({
            title: "Paint and Sip",
            description: "An Interactive Paint and Sip event with Poetry",
            author: User._id
        }).then(stuff => {
            tree.myStuff.push(stuff)
         })
        const stuff2Promise = Stuff.create({
            title: 'Day Party',
            description: 'A party to promote Poetry Pins',
            author: User._id
        }).then(stuff=>{
            tree.myStuff.push(stuff)
        })
        return Promise.all([stuff1Promise, stuff2Promise]).then(()=> {
            tree.save()
        })
    })