const express = require('express')
const app = express()
const usersRouter = require('./router')
let bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(usersRouter)


app.listen(90, ()=>{
    console.log('express server running at http://127.0.0.1')
})
