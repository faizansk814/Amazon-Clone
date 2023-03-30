const express=require('express')
const SaleModel = require('../model/sale.model')
const salerouter=express.Router()

salerouter.post("/post",async (req,res)=>{
   try {
    const data=new SaleModel(req.body)
    await data.save()
    res.status(200).send(data)
   } catch (error) {
    res.status(401).send({"msg":error.message})
   }
})

module.exports=salerouter