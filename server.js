// const express = requre('express')
// const logger = require('morgan')
// const app = express()
// const routes = require('./routes/index')
// const userController = require('./controllers/userController')

// app.use(logger('dev'))
// app.use(express.json())
// app.use(express.static(`${__dirname}/client/build`))
// app.use('/api/stuff',routes)
// app.get('/*',(req, res)=>{
//     res.sendfile(`${__dirname}/client/build/index.html`)
// })
// const PORT=process.env.PORT || 3000

// app.listen(PORT,()=>{
//     console.log('App is up and running on port' + PORT)
// })

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index.js')

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

// method override allows us to 
// override the method of form requests
// so method="POST" can become method="PATCH"

app.use(methodOverride('_method'))
app.use(logger('dev'))

// These following two lines are how we use
// express' built-in body-parser to handle form submissions
app.use(express.urlencoded({ extended: true }));
// Later, when we're working with JSON, we'll want to use the JSON
// feature of body parser:
app.use(express.json());


app.use('/', routes)

// process.env.PORT is necessary for deployment to Heroku
// If environment variable is not provided, default to 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})
