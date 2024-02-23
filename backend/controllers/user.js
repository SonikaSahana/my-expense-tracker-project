const express = require('express')
const path=require("path");
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken')

// exports.signupPage = (req,res,next) => {
// express.static(path.join(__dirname , '..','..','frontend'))
//     res.sendFile(path.join(__dirname,'..','..','frontend','signup.html'));
// }
const User = require('../models/user')

function isStringValid(string){
    if(string==undefined ||string.length===0){
    return true
    }
else
    {
        return false
    }
}

// exports.createUser = async (req,res) => {
//     try{
// const {name,email,password}=req.body;
// console.log("email",email)
// if(isStringValid(name)||isStringValid(email)||isStringValid(password))
// {
//     return res.status(400).json({message: "bad parameters.something is missing"})
// }
// console.log("print 1  ")
// await User.create({name,email,password})
// console.log("print 2  ")
// return res.status(201).json({message:"successfully create new user"})
//     } catch(err){
//         console.log("print 3  ")
//     res.status(500).json(err)

// }
// }

// exports.login=async(req,res)=>{
//     try{
//         const{email,password}=req.body;
//         if(isStringValid(email)||isStringValid(password)){
//             return res.status(400).json({message:'email id or password is missing',success:false})
//         }
//         console.log(password)
//         const user=await user.findAll({where:{email}})
//         if(user.length>0){
//             bcrypt.compare(password,user[0].password,(err,result)=>{
//                 if(err){
//                     res.status(500).json({message:"something went wrong",success:false})
//                 }
//                 if(result===true){
//                 res.status(200).json({message:"user logged in succesfully",success:true})
//             }
//             else{
//                 return res.status(400).json({message:'password is incorrect',success:false})
//             }
//         })
//     }
    
//         else{
//             return res.status(404).json({message:'user does not exist',success:false})
//         }
//     }
//     catch(err){
//         return res.status(500).json({message:err,success:false})
//     }
    
// }

exports.createUser = async (req,res) =>{
    console.log("print 112")
    try{const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    let result = await User.findOne({where : {email : email}})
    console.log(result)
    if(result !== null)
        return res.status(401).json({success : false , msg : "User already exists"})
    let hash = await bcrypt.hash(password , 10);
    const user = await User.create({name : name , email : email , password : hash})
    
    const userWithoutPassword = user.toJSON();
    console.log(userWithoutPassword)
    delete userWithoutPassword.password;
    
    return res.json(userWithoutPassword);
    }catch(e){
        return res.status(500).json({msg : "Internal server error"})
    }
}


exports.login = async (req ,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({where : {email : email}})
        
 
        if(user === null){

            return res.status(401).json({success : false , msg : "wrong credentials"})
        }
    }
        catch(err){
          return err
        }

    }


