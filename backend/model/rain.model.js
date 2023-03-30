const mongoose=require('mongoose')


const rainSchema=mongoose.Schema({
    image1:String,
    name:String,
    price:Number,
    size:String,
})

const RainModel=mongoose.model("rain",rainSchema)

module.exports=RainModel