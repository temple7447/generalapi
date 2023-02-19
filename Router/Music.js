const express = require('express')
const router = express.Router()
const multer = require('multer');

const Music =  require('../Models/Music')



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
        }));
      
        res.json(files);
      }
    });
  });




module.exports = router