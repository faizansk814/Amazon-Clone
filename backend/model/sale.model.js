const mongoose=require('mongoose')


const saleSchema=mongoose.Schema({
    image1:String,
    name:String,
    price:Number,
    size:String,
    type:String
})

const SaleModel=mongoose.model("sale",saleSchema)

module.exports=SaleModel