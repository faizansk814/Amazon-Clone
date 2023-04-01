const express=require('express')
const userrouter=express.Router()
const bcrypt=require('bcrypt')
const UserModel = require('../model/user.model')
const jwt=require('jsonwebtoken')



userrouter.post("/register",(req,res)=>{
    const {name,email,password,age,phone}=req.body
    try {
        bcrypt.hash(password, 5,async  function(err, hash) {
            const user=new UserModel({name,email,password:hash,age,phone})
            await user.save()
            console.log(req.body)
            res.status(200).send(user)
        });
    } catch (error) {
        res.status(401).send({"msg":error.message})
    }
})

userrouter.post("/login",async (req,res)=>{
    const {email,password}=req.body
    try {
        const data=await UserModel.findOne({email})
        if(data){
            bcrypt.compare(password, data.password, function(err, result) {
                if(result){
                    res.status(200).send({"token":jwt.sign({ "userID": data._id }, 'marvel'),"userdetails":data})
                }else{
                    res.status(401).send({"msg":"Wrong Credintials"})
                }
                
            });
        }else{
            res.status(401).send({"msg":"User not found"})
        }
    } catch (error) {
        res.status(401).send({"msg":error.message})
    }
})

module.exports=userrouter