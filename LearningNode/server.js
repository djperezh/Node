var express = require('express')
var bodyparser = require('body-parser')
var app = express()

// enable pulling by using socket.io library
// this library needs to be included in the client too to enable the bidirectional communication
var http = require('http').Server(app)
var io = require('socket.io')(http)


// load static web content
app.use(express.static(__dirname))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

var messages = []

app.get('/messages', (req, res) =>{
    res.send(messages)
})

app.post('/messages', async (req, res) => {
    try {
        // use "await" ( evolution of promises) for a cleaner code
        messages.push(req.body)
        io.emit('message', req.body)
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }

})

io.on('connect', (socket) => {
    console.log('user connected')
})

var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})
