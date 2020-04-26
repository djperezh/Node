const fs = require('fs')
const writeStream = fs.createWriteStream('./assets/myFile.txt', 'UTF-8')

process.stdin.on('data', data => {
    writeStream.write(data)
})