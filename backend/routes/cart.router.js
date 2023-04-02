const express=require('express')
const CartModel = require('../model/cart.model')
const cartrouter=express.Router()
const jwt=require('jsonwebtoken')
const duplicate=require("../middleware/duplicate")
cartrouter.get("/",duplicate, async (req, res) => { 
   try {
    const token=req.headers.authorization.split(" ")[1]
    const decoded=jwt.verify(token,"marvel")
      const data = await CartModel.find({"userID":decoded.userID})
      res.status(200).send(data)
   } catch (error) {
      res.status(401).send({ "msg": error.message })
   }
})

cartrouter.post("/post",duplicate,async (req,res)=>{
   try {
    const data=new CartModel(req.body)
    await data.save()
    res.status(200).send({"msg":"Product added to the cart",data:data})
   } catch (error) {
    res.status(401).send({"msg":error.message})
   }
})
cartrouter.patch("/incpatch/:id",async (req,res)=>{
   const {id}=req.params
   const data=await CartModel.findByIdAndUpdate({_id:id},{$inc:{quantity:1}})
   console.log(data)
   res.status(200).send({"msg":"Data updated",data:data})
})
cartrouter.patch("/decpatch/:id",async (req,res)=>{
   const {id}=req.params
   const data=await CartModel.findByIdAndUpdate({_id:id},{$inc:{quantity:-1}})
   console.log(data)
   res.status(200).send({"msg":"Data updated",data:data})
})
cartrouter.delete("/delete/:id",async (req,res)=>{
   const {id}=req.params
   const data=await CartModel.findByIdAndDelete({_id:id})
   console.log(data)
   res.status(200).send({"msg":"Data Deleted",data:data})
})

module.exports=cartrouter