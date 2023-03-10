const express = require('express')
const router = express.Router()
const multer = require('multer');

const Music =  require('../Models/Music')
const MusicUrl = require('../Models/MusicUrl')



const upload = multer({ storage: multer.memoryStorage() });
router.post("/uploadMusicFile", upload.single("musicFile"), (req, res) => {
    // handle the uploaded music file
    const musicFile = req.file;
    console.log(musicFile)
const { originalname,  buffer} = musicFile;

    const NewMusic = new Music({
      name: originalname,
      data:buffer,
    })

    NewMusic.save()
    .then((success)=>{
        console.log("it was a success")
      
    })
    .catch((err)=>{
        console.log(err)
    })

  });

 


  // router.get("/uploadMusicFile", (req, res) => {
  //   Music.find({}, (err, music) => {
  //     if (err) {
  //       console.error(err);
  //       res.status(500).send("Error retrieving music files");
  //     } else {
  //       const files = music.map((m) => ({
  //         name: m.name,
  //         data: m.data,
  //       }));
  
  //       res.setHeader("Content-Type", "audio/mpeg");
  //       files.forEach((file) => {
  //         res.write(file.data);
  //       });
  //       res.end();
  //     }
  //   });
  // });




  router.get("/uploadMusicFile", (req, res) => {
    Music.find({}, (err, music) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving music files");
      } else {
        const files = music.map((m) => ({
          name: m.name,
          data: `data:audio/mp3;base64,${m.data.toString('base64')}`,
          id:m._id
        }));
      
        res.json(files);
      }
    });
  });



  router.post('/uploadMusicFileUrl',(req,res)=>{
   const {name, size, type, musicUrl,Photourl,options} = req.body;
   console.log(options)

   const NewMusicUsers = new MusicUrl({
    name,
    size,
    type,
    musicUrl,
    Photourl,
    options
   })

NewMusicUsers.save({})
.then(()=>{
  console.log("it was sent")
}).catch((err)=>{
  console.log(err)
})

  })
  
  router.get('/uploadMusicFileUrl',(req,res)=>{

    MusicUrl.find({}, (err, music) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving music files");
      } else {
        res.json(music);
      }
    });


  })


module.exports = router