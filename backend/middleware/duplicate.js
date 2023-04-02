let jwt=require('jsonwebtoken')
const CartModel=require('../model/cart.model')
const duplicate=async (req,res,next)=>{
   const token=req.headers.authorization.split(" ")[1]
   let decoded=jwt.verify(token,"marvel")
   console.log(decoded)
    try {
          const data = await CartModel.findOne({_id:req.body._id,userID:decoded.userID})
          console.log(data)
          if(data){
           res.status(200).send({"msg":"Data already present"})
          }else{
            next()
          }
       } catch (error) {
          res.status(401).send({ "msg": error.message })
       }
}

module.exports=duplicate