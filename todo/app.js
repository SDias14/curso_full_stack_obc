// Importing modules needed for the application
const express = require('express');
const path = require('path');
const checkListRouter = require('./src/routes/checklist');//checklist router
const taskRouter = require('./src/routes/task');//task router
const   rootRouter = require('./src/routes/index');//root router
const methodOverride = require('method-override');//method override

//importing database connection
require('./config/database')//database connection

//creating express app
const app = express();//express app
//setting up middlewares
app.use(express.json());//this middleware parses incoming requests with JSON payloads
app.use(express.urlencoded({extended: true}));//this middleware parses incoming requests with urlencoded payloads
app.use(methodOverride('_method', {methods: ['POST', 'GET']}));//this middleware allows us to use HTTP verbs such as PUT or DELETE in places where the client doesn't support it

app.use(express.static(path.join(__dirname, 'public'))); // this middleware allows us to serve static files such as images, CSS files, and JavaScript files


app.set('views', path.join(__dirname, 'src/views'));// this middleware sets the default directory, where the templates will be stored
app.set('view engine', 'ejs');// this middleware sets the default engine extension to use when omitted

app.use('/', rootRouter);//this middleware sets the root router. When a request is made to the root, the root router will handle it

app.use('/checklists',checkListRouter);//this middleware sets the checklist router
app.use('/checklists', taskRouter.checklistDependent);//this middleware sets the task router




app.listen(3000, () => console.log('Listening on port 3000...'));//listen on port 3000
