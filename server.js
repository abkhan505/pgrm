const express = require('express') // Pulls in Express framework
const app = express() // Assigns Express to variable
const mongoose = require('mongoose') // Pulls in Mongoose
const passport = require('passport') // Pulls in Passport (log-in auth)
const session = require('express-session') // Creates sessions within web-apps
const MongoStore = require('connect-mongo')(session) // Connects to mongoDB
const flash = require('express-flash') // Defines flash messages and renders it without redirecting request
const logger = require('morgan') // Middleware which simplifies process of logging requests to the application
const connectDB = require('./config/database') // Variable points to /config/database for database connection
const mainRoutes = require('./routes/main') // Variable points to /routes/main to route main requests to root
const todoRoutes = require('./routes/todos') // VAriable points to /routes/todos to route todo requests to todos

require('dotenv').config({path: './config/.env'}) // Pulls in .env with all of our log-in information

// Passport config
require('./config/passport')(passport)

connectDB()

// All of these express.whatever are middleware methods we can pull in from Express, app.use just lets us set up middleware functions
app.set('view engine', 'ejs') // Sets up ejs file for rendering
app.use(express.static('public')) // Serves static files, anything in public folder is available immediately (CSS/server side JS)
app.use(express.urlencoded({ extended: true })) // Deals with incoming URL requests
app.use(express.json()) // Deals with incoming requests with JSON payloads
app.use(logger('dev')) 
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize()) // Initializes passport
app.use(passport.session()) // Initializes authentication for that specific session

app.use(flash())
  
app.use('/', mainRoutes) // Upon hearing the '/' or root website request > sends to mainRoutes for further redirection
app.use('/todos', todoRoutes) // Upon hearing the '/todos' or todos page request > sends to todoRoutes for further redirection
 
app.listen(process.env.PORT, ()=>{ // This is just for connecting to the port
    console.log('Server is running, you better catch it!')
})    