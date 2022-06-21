// console.log('Hello World')
const express = require('express')
const colors = require('colors')
// that allows a dotenv file with the variables
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
// port we want our server to run on
// const port = 5000
// update to be able to use env variable for port
const port = process.env.PORT || 5000

connectDB()

const app = express()

// these two lines allow us to see/interpret the body
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

// this is the initial route that we want to create
// GET http://localhost:5000/api/goals
// similar to 
// GET http://localhost:5000/api/allstudents
// to clean this up, this is going to go in routes > goalRoutes.js
// app.get('/api/goals', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
// })