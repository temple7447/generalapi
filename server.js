const express = require('express');
const app = express();
const connectDB = require('./db')
const State = require('./component/State')
const DailyDevotional = require('./Router/Dailyform')
const MelodyRouter = require('./Router/Melody')
const cors = require('cors')
const SermonDetails = require('./component/Sermons')
const axios = require("axios");
const mongoose = require('mongoose');
const path=  require("path")
const multer = require('multer');
const MusicRouter = require('./Router/Music')
const data = require('./component/test')

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
  

connectDB()

app.use(express.json())


app.use('/', DailyDevotional)
app.use('/', MelodyRouter)
app.use('/', MusicRouter)
app.get('/sermon',(req,res)=>{
res.send(SermonDetails)
})


app.get("/musicm", (req,res)=>{
    res.send("the name is test and what can i give you in return")
})

app.get('/state',(req,res)=>{
    res.send(State)
    
})


app.get('*',(req,res)=>{
    res.send('page was not found')
})
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})