var msg = 'hello world'
console.log(msg)

// Demo: Use Module

// Old style
// var myModule = require('./myModule.js')
// console.log(myText)

// ES6 style
import { myText } from './myModule.js'
console.log(myText)

// Demo: Use lodash
import { random } from 'lodash'
console.log(random(1, 40))

// Demo: reading from file
//var data = require('./data.json')
//console.log(data.name)
import { readFile } from 'fs'
readFile('./test.json', 'utf-8', (err,data) => {
    var data = JSON.parse(data)
    console.log(data.name)
})

console.log('>>>> END <<<<')