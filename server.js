const express = require('express');
const app = express();
const State = require('./component/State')
const cors = require('cors')
const SermonDetails = require('./component/Sermons')
const axios = require("axios");
app.use(cors())


app.get('/sermon',(req,res)=>{
res.send(SermonDetails)
})



app.get('/state',(req,res)=>{
    res.send(State)
    
})
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})