const express =require('express')
const router=express.Router()
const User = require('../models/User');
const  Stuff  = require('../models/Stuff');

const userController = {
    index: (req, res) => {
        // Show all users
            User.find()
            .then(stuff=>{
              res.send(stuff)  
            })
            .catch(err=>console.log("error: "+err))

        //         res.render('users/index', {stuffs})
            
    },
    new: (req, res) => {
        // res.render('users/new')
        res.send('new user')
    },
    create: (req, res) => {
        User.create(req.body).then(user => {
        //     res.render('planner/index')
        res.send('create'+user)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .then(user => {
                // res.render('users/show', {user})
                res.send(user)
            })
    },
    edit:(req,res)=>{
        User.findById(req.params.userId).then(user=>{
            // red.render('users/edit', {user})
            res.send(user)
        })
    },
    update:(req,res)=>{
        User.findByIdAndUpdate(req.params.userId, req.body, {new:true})
        .then(()=>{
            res.send("update page")
            // res.redirct(`/users/${req.params.userId}`)
        })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => 
            res.redirect('/'))
        }
    }


module.exports = userController