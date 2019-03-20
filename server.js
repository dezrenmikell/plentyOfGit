const express = require('express')
const logger = require('morgan')
const app = express()
const routes = require('./routes/index')
const userController = require('./controllers/userController')

app.use(logger('dev'))
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))
app.use('/api/users',routes)
app.get('/*',(req, res)=>{
    res.sendfile(`${__dirname}/client/build/index.html`)
})
const PORT=process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log('App is up and running on port' + PORT)
})

