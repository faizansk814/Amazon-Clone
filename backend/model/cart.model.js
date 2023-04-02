const mongoose=require('mongoose')


const cartSchema=mongoose.Schema({
    _id:String,
    image1:String,
    name:String,
    price:Number,
    size:String,
    userID:String,
    quantity:Number
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports=CartModel