import fs from 'fs'
import path from 'path'
import rfs from 'rotating-file-stream'

const logDirectory = path.join(__dirname, '../logs')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
 
const pad =(num:number)=> {
    return (num > 9 ? "" : "0") + num;
}

const generator=(time:any, index:number)=> {
    if (!time){ 
        return "log-api.log";
    }
    var month = time.getFullYear() + "" + pad(time.getMonth() + 1);
    var day = pad(time.getDate());
    var hour = pad(time.getHours());
    var minute = pad(time.getMinutes());
 
    return month + "/" + month + day + "-" + hour + minute + "-" + index + "-log-api.log";
}
 
// create a rotating write stream
let accessLogStream = rfs(generator, {
  interval: '1d', // rotate daily
  path: logDirectory,
})

export default accessLogStream