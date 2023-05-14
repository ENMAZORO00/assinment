import mongoose from "mongoose";
import {Schema} from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Profession:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Experience:{
        type:String,
        
    },
    Blog:{
        type:String,
  },
})

export  default mongoose.model("User",UserSchema);