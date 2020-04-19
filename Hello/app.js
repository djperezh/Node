var msg = 'hello world'
console.log(msg)

// Demo: Use Module
var myModule = require('./myModule.js')
console.log(myModule.myText)

// Demo: Use lodash
var _ = require('lodash')
console.log(_.random(1, 40))

// Demo: reading from file
//var data = require('./data.json')
//console.log(data.name)
var fs = require('fs')
fs.readFile('./test.json', 'utf-8', (err,data) => {
    var data = JSON.parse(data)
    console.log(data.name)
})

console.log('>>>> END <<<<')