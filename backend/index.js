const express=require('express')
const connection =require('./connection/db')
const fleecerouter = require('./routes/fleece.router')
const rainrouter = require('./routes/rain.router')
const salerouter = require('./routes/sale.route')
const cors=require('cors')
require('dotenv').config()
const userrouter=require('./routes/user.router')
const cartrouter = require('./routes/cart.router')
const auth = require('./middleware/auth')
const duplicate=require('./middleware/duplicate')

const app=express()
app.use(express.json())
app.use(cors())
app.use("/user",userrouter)
app.use("/sale",salerouter)
app.use("/rain",rainrouter)
app.use("/fleece",fleecerouter)
app.use(auth)
app.use(duplicate)
app.use("/cart",cartrouter)


app.listen(process.env.port,async()=>{
    await connection
    console.log("connected to db")
})