
const express=require("express")
const path = require('path')
const router = express.Router();
const app = express()
// user/signup

const expenseRoutes = require('./backend/routes/expense')

const User = require('./backend/models/user')
const Expense = require('./backend/models/expense')


const userRoutes = require('./backend/routes/user')
const sequelize = require('./backend/util/db')
app.use(express.static(path.join(__dirname , 'frontend')))
app.use("/",function(req,res){
    res.sendFile(path.join(__dirname,'frontend','signup.html'));
})
//app.use(cors())
app.use(express.json())

app.use('/user' ,userRoutes )
app.use('/expense' , expenseRoutes)


User.hasMany(Expense)
Expense.belongsTo(User)


sequelize
.sync({force : true})
.then((result) => {
    app.listen(4001)
}).catch(e => console.log(e))

