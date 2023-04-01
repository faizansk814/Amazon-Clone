const express=require('express')
const CartModel = require('../model/cart.model')
const cartrouter=express.Router()
const jwt=require('jsonwebtoken')
cartrouter.get("/", async (req, res) => { 
   try {
    const token=req.headers.authorization.split(" ")[1]
    const decoded=jwt.verify(token,"marvel")
      const data = await CartModel.find({"userID":decoded.userID})
      res.status(200).send(data)
   } catch (error) {
      res.status(401).send({ "msg": error.message })
   }
})

cartrouter.post("/post",async (req,res)=>{
   try {
    const data=new CartModel(req.body)
    await data.save()
    res.status(200).send(data)
   } catch (error) {
    res.status(401).send({"msg":error.message})
   }
})

module.exports=cartrouter