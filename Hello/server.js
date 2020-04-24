var express = require('express')
var bodyparser = require('body-parser')
var app = express()

// load static web content
app.use(express.static(__dirname))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

var messages = [{ name: "Eddie", message: "PJ hits" }]

app.get('/messages', (req, res) => {
    console.log(messages)
    res.send(messages)
})

app.post('/messages', (req, res) => {
    //console.log(req.body)
    messages.push(req.body)
    res.sendStatus(200)
})

var server = app.listen(3000, () => {
    console.log('server listening on port ' + server.address().port)
})
