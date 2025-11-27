import express from 'express'
import dbConnect from './config/database.js';

const app = express() ;
//NOTE fn used for mongodb connection
dbConnect()


app.get('/', (req,res)=>{
res.send("Homepage")
})

app.listen(3000, ()=>{
    console.log(`Server is running on 3000`)
})