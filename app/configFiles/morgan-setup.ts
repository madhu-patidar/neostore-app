import fs from 'fs'
import path from 'path'
import rfs from 'rotating-file-stream'

const logDirectory = path.join(__dirname, '../logs')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
 

const generator=()=> {

    let d = new Date();
    let month = d.toLocaleString('en-us', { month: 'long' });
    let year = d.getFullYear()

    return month+"-"+year + "/" + d.toDateString() + "-" + "-log-api.log";
}
 
// create a rotating write stream
let accessLogStream = rfs(generator, {
  interval: '1d', // rotate daily
  path: logDirectory,
})

export default accessLogStream