require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Stuff = require('../models/Stuff')

const car = new Stuff({
    title: "car",
    description:"vroom vroom"

})
const house = new Stuff({
    title: "house",
    description: "rooms"
})

User.deleteMany()
    .then(()=>{
        return Stuff.deleteMany()
    })
//create first User(planner)    
    .then(()=>{
        return User.create({
            title: "Tree",
            userName: "tree_login",
            password: "treepassword",
            stuffs: [car,house]

        })
    })
//create events for the first user ()   
    .then(tree=>{
        const stuff1Promise = Stuff.create({
            title: "Paint and Sip",
            description: "An Interactive Paint and Sip event with Poetry",
        }).then(stuff => {
            tree.stuffs.push(stuff)
         })
        const stuff2Promise = Stuff.create({
            title: 'Day Party',
            description: 'A party to promote Poetry Pins',
        }).then(stuff=>{
            tree.stuffs.push(stuff)
        })
        return Promise.all([stuff1Promise, stuff2Promise]).then(()=> {
            tree.save()
        })
    })