const path=require('path')

const express=require('express')

const bodyParser=require('body-parser')

const Sequelize=require('./util/database')

const app=express()

const adminroutes=require('./routes/member')

const cors=require("cors")

app.use(cors())

app.use(bodyParser.json({extended:false}))
app.use(express.static(path.join(__dirname, "public")));

app.use(cors(),adminroutes)

// app.use(errorController.get404);

Sequelize.sync().then(res=>{
  
    app.listen(3000)
}).catch(err=>console.log(err))
