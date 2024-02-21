
const express=require("express")
//const cors = require('cors')
const fs = require('fs')
const path = require('path')
const https = require('https')
const app = express()
// user/signup
app.use(express.static(path.join(__dirname , '..' , 'frontend')))
const userRoutes = require('./backend/routes/user')
const sequelize = require('./backend/util/db')

//app.use(cors())
app.use(express.json())

app.use('/user' ,userRoutes )


sequelize
.sync()
// .sync({force : true})
.then((result) => {
    app.listen(4000)
}).catch(e => console.log(e))

