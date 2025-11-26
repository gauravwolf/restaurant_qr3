import express from 'express'
import dbConnect from './config/database';


const app = express() ;

dbConnect()

app.get('/', (req,res)=>{
res.send("Homepage")
})

app.listen(3000, ()=>{
    console.log(`Server is running on 3000`)
})
