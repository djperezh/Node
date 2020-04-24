var msg = 'hello world'
console.log(msg)

// Demo: Use Module

// Old style
var myModule = require('./myModule.js')
console.log(myModule.myText)

// Demo: Use lodash
var lodash = require('lodash')
console.log(lodash.random(1, 40))

// Demo: reading from file
var data = require('./data.json')
console.log(data.name)
var fs = require('fs')
fs.readFile('./data.json', 'utf-8', (err,data) => {
    var data = JSON.parse(data)
    console.log(data.name)
})

console.log('>>>> END <<<<')