
const CartModel=require('../model/cart.model')
const duplicate=async (req,res,next)=>{
    try {
          const data = await CartModel.findOne({name:req.body.name})
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