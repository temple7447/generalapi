const express = require('express');
const app = express();
// const connectDB = require('./db')
const State = require('./component/State')
const DailyDevotional = require('./Router/Dailyform')
const MelodyRouter = require('./Router/Melody')
const cors = require('cors')
const SermonDetails = require('./component/Sermons')
const axios = require("axios");
const songs = require('./component/Song')
const path=  require("path")

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


// connectDB()

app.use(express.json())

app.use('/', DailyDevotional)
app.use('/', MelodyRouter)
app.get('/sermon',(req,res)=>{
res.send(SermonDetails)
})


app.get("/music", (req,res)=>{
    res.send(songs)
})

app.get('/state',(req,res)=>{
    res.send(State)
    
})
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})