const cp = require('child_process')

const command = 'start iexplore' // windows
//const command = 'open http://www.google.com' // linux

cp.exec(command, (err, data, stderr) => {
    console.log(stderr)
})