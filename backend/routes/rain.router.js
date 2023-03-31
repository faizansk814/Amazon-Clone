const express=require('express')
const RainModel = require('../model/rain.model')
const rainrouter=express.Router()
rainrouter.get("/", async (req, res) => { 
   try {
      const data = await RainModel.find()
      res.status(200).send(data)
   } catch (error) {
      res.status(401).send({ "msg": error.message })
   }
})
rainrouter.post("/post",async (req,res)=>{
   try {
    const data=new RainModel(req.body)
    await data.save()
    res.status(200).send(data)
   } catch (error) {
    res.status(401).send({"msg":error.message})
   }
})

module.exports=rainrouter