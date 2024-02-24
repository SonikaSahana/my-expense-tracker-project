const User = require('../models/user');
const path = require('path');
const express = require('express');
const { JSON } = require('sequelize');




exports.getExpensesPage = (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','public', 'views','expenseTracker.html'));
     
}

exports.getExpenses = (req, res, next) => {
   
   


   
}


exports.postRegister = (req,res,next) => {
    console.log('PRINT kkkkkk..')
    console.log(req.body.description)
    console.log(req.body.amount)
    let expenses = {
        amount: req.body.amount,
        description: req.body.description,
        catagory:req.body.catagory
    }

    User.create({
        amount: expenses.amount,
        description:expenses.description,
        catagory:expenses.catagory

    })
    .then( result => {
        console.log('Created..')
       res.redirect('/successfullyadded');
    })
    .catch( err => {
        res.send("invalid")
       // res.sendStatus(500).json(err)
        console.log(err)
    });

   
}

exports.getBookingSuccess = ( req, res, next) => {
  res.send(' Successfully Registered')
  
}

exports.postDeleteUer = () => {

};

