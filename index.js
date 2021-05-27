//
const express=require('express')
const  app=express()
const mongoose = require('mongoose');
const productRoute = require('./Router/product');
const bodyParser = require('body-parser')
const cors=require("cors")

const DbKey="mongodb+srv://samar:JhPNKlEHp79lPgn2@cluster0.phtms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT=3000

app.use(bodyParser.json())
app.use(cors({
    credentials:true,
    origin:true
}))


//Routes
app.use("/api/v1/",productRoute)
//Db Connnect
mongoose.connect(DbKey, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true})
.then(async ()=>{
    console.log("DB Connected")
}) 

app.get("/",(req,res)=>{
    return res.send("on web")
})

app.listen(process.env.PORT||3000,()=>{
    console.log("Running on Port 3000")
})