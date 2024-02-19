
const express=require("express")
const app = express()
// user/signup
const userRoutes = require('./backend/routes/user')
const sequelize = require('./backend/util/db')

app.use('/user' ,userRoutes )
sequelize
.sync()
// .sync({force : true})
.then((result) => {
    app.listen(4000)
}).catch(e => console.log(e))

