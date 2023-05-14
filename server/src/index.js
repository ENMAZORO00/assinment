import express from "express";
import dotenv from "dotenv";
import User from "../models/User.js";
import mongoose from "mongoose";

const app=express();

dotenv.config();

app.get("/",(req,res)=>{
    res.send("Hello world");
})
const connect= async()=>{
    try{
  await mongoose.connect(process.env.MONGO);
  console.log("connected to mongodb");
    }catch(error){
        throw error;
    }
};
app.use(express.json())

// create user

app.post("/", async (req, res)=>{
    const newUser = new User(req.body);
    try{
     const savedUser = await newUser.save()
     res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

// update user

app.put("/:id", async (req, res)=>{
    try{
     const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true}
     );
     res.status(200).json(updateUser)
    }catch(err){
        res.status(500).json(err)
    }
})

//delete user

app.delete("/:id", async (req, res)=>{
    try{
     await  User.findByIdAndDelete(
        req.params.id
     );
     res.status(200).json("hotel has been deleted");
    }catch(err){
        res.status(500).json(err)
    }
})

// GET USER

app.get("/:id", async (req, res)=>{
    try{
     const user = await User.findById(
        req.params.id
     );
     res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})
app.listen(8800,()=>{
    connect()
    console.log("connected to backhand");
}); 