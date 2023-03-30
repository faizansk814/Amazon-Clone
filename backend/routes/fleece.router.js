const express=require('express')
const FleeceModel = require('../model/fleece.model')
const fleecerouter=express.Router()

fleecerouter.post("/post",async (req,res)=>{
   try {
    const data=new FleeceModel(req.body)
    await data.save()
    res.status(200).send(data)
   } catch (error) {
    res.status(401).send({"msg":error.message})
   }
})

module.exports=fleecerouter