const express = require('express')
const router  = express.Router()
const Melody = require('../Models/Melody')


router.post('/melody',(req,res)=>{

    const {name,desc, linkImg} = req.body;

    const MelodyUser = new Melody({
name,desc,linkImg
    })

    MelodyUser.save().then((res)=> console.log(res))
    .catch((err)=>{ console.log(err)})
})


router.get('/melody', (req,res)=>{
   Melody.find({},(err, inform)=>{
        if(err) return err

        res.send(inform)
    })
})



module.exports = router