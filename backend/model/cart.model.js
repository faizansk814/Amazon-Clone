const mongoose=require('mongoose')


const cartSchema=mongoose.Schema({
    image1:String,
    name:String,
    price:Number,
    size:String,
    userID:String
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports=CartModel