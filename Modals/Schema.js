const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    },
    price:{
        type:Number,
        trim:true,
        required:true,
        maxlength:12,

    },
    description:{
        type:String,
        trim:true,
        required:true,
        maxlength:300,
    },

},{timestamps:true})
module.exports=mongoose.model("Product",productSchema)