const express = require('express')
const router = express.Router();


//const Expense = require('../models/expense')
const expense = require('../controllers/expense')

//const authenticate = require('../middleware/auth')


//router.get('/' ,authenticate, expense.getAll) //fetch all the expense 

router.post('/add-expense' , expense.addExpense) // add a new expense

router.delete('/deleteExpense/:id' ,  expense.deleteExpense) // delete a expense

router.post('/edit-expense/:id' , expense.editExpense)

router.post('/get-expense' ,expense.getExpenses )


//router.get('/download' , authenticate , expense.downloadExpenses)
//router.get('/get-all-urls' , authenticate , expense.downloadUrls)


module.exports = router;