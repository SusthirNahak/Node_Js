import http from 'http'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

dotenv.config({'path':'./config/config.env'})
let port =process.env.PORT
let host =process.env.HOSTNAME 

let server =http.createServer((req,res)=>{
    console.log(req.url);
    fs.readFile(path.join(process.cwd(),"staticFiles","index.html"),'utf-8',()=>{

    })


})
server.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server running: http://${host}:${port}`);
})