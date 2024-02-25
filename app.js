
const express=require("express")
const path = require('path')
const router = express.Router();
const app = express()
const sequelize = require('./backend/util/db')
// user/signup


const userRoutes = require('./backend/routes/user')
const expenseRoutes = require('./backend/routes/expense')
const paymentsRoutes = require('./backend/routes/purchase')
const premiumRoutes = require('./backend/routes/premium')



app.use(express.static(path.join(__dirname , 'frontend')))
app.use("/",function(req,res){
    res.sendFile(path.join(__dirname,'frontend','signup.html'));
})
//app.use(cors())
const User = require('./backend/models/user')
const Expense = require('./backend/models/expense')
const Order = require('./backend/models/order')
const Download = require('./backend/models/download')


const passwordRoutes = require('./backend/routes/forgot-password')
const resetPassword = require('./backend/models/resetPassword')
const reportRoutes = require('./backend/routes/report')
app.use(express.json())

app.use('/user' ,userRoutes )
app.use('/expense' , expenseRoutes)
app.use('/payment' , paymentsRoutes)
app.use('/premium' , premiumRoutes)
app.use('/password', passwordRoutes)
app.use('/report' , reportRoutes)


User.hasMany(Expense)
Expense.belongsTo(User)
User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(resetPassword)
resetPassword.belongsTo(User)

User.hasMany(Download)
Download.belongsTo(User)


sequelize
.sync({force : true})
.then((result) => {
    app.listen(4001)
}).catch(e => console.log(e))

