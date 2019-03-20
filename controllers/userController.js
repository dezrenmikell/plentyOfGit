const User = require('../models/User')

const userController = {
    index: (req, res) => {
        res.send('Hello World')
    }
}

module.exports= userController