const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
    },
   price:{
        type:String,
        required:true,
       
        max:50,
    },
    desc:{
        type:String,
    },
    images:{
        type:[String],
        required:true,
       
    },
});

module.exports = mongoose.model("products",productSchema);