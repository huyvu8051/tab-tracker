console.log('hello khong nam ma do co an thi chi co an duoi bau an shit thoy')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.post('/register', (req, res)=>{
    res.send({
        message: `Hello ${req.body.email}! Your email was register! Have fun!`
    })
})
app.listen(process.env.PORT || 8081)
