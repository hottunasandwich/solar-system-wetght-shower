const child_process = require('child_process')
async function g() {
    var a = child_process.exec('node test.js', { cwd: __dirname }, (error, stdout, stderr) => {
        console.log(error, stdout, stderr)
    })
    console.log(a)
}