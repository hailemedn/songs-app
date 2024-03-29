const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/songs', require('./routes/songRoutes'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})