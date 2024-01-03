const { string } = require("joi")
const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{type : string , 
        required:true , 
        trim:true}
        ,
    email:{type : string , 
            required:true , 
            trim:true}
            ,
    phone:{type : string , 
                required:true , 
                trim:true}
                ,
    city:{type : string , 
                required:true , 
                trim:true}
                ,
    adresse:{type : string , 
                required:true , 
                trim:true}
});
const User = mongoose.model("User",userSchema);
module.exports=User;