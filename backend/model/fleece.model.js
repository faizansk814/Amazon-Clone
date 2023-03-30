const mongoose=require('mongoose')


const fleeceSchema=mongoose.Schema({
    image1:String,
    name:String,
    price:Number,
    size:String,
})

const FleeceModel=mongoose.model("fleece",fleeceSchema)

module.exports=FleeceModel