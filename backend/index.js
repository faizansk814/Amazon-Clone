const express=require('express')
const connection =require('./connection/db')
const fleecerouter = require('./routes/fleece.router')
const rainrouter = require('./routes/rain.router')
const salerouter = require('./routes/sale.route')
require('dotenv').config()
const userrouter=require('./routes/user.router')

const app=express()
app.use(express.json())
app.use("/user",userrouter)

app.use("/sale",salerouter)
app.use("/rain",rainrouter)
app.use("/fleece",fleecerouter)

app.listen(process.env.port,async()=>{
    await connection
    console.log("connected to db")
})