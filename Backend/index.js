//Imports
const express = require('express');
const app = express();
const body_parser=require('body-parser');
require('dotenv').config();

// Middleware
app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json())

//Port value
const Port = process.env.PORT;

// Routes
const student_Route=require('./Server/Routes/Student_Routes')
app.use('/',student_Route)


//Test server
app.get("/", (req, res) => {
    res.send("Our server is start")
})


// Listen Port
app.listen(Port, () => console.log(`Server is Starting ${Port} Port Value`))