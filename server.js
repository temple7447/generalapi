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
const songs = require('./component/Song')
const path=  require("path")
const multer = require('multer');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
  

connectDB()

app.use(express.json())


const musicSchema = new mongoose.Schema({
  name: String,
  path: String,
});

const Music = mongoose.model('Music', musicSchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});


const upload = multer({ storage: storage });

app.post('/musicm', upload.single('musicFile'), (req, res) => {
  console.log(req.file)
  // const { originalname, path } = req.file;
  // console.log(originalname)
  // const music = new Music({ name: originalname, path });
  // music.save((err) => {
  //   if (err) {
  //     console.log('Error saving music file to database:', err);
  //     return res.status(500).send(err);
  //   }
  //   console.log('Music file saved to database:', music);
  //   res.send(music);
  // });
});

app.use('/', DailyDevotional)
app.use('/', MelodyRouter)
app.get('/sermon',(req,res)=>{
res.send(SermonDetails)
})


app.get("/music", (req,res)=>{
    res.send(songs)
})
app.get("/musicm", (req,res)=>{
    res.send("the name is test and what can i give you in return")
})

app.get('/state',(req,res)=>{
    res.send(State)
    
})
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})