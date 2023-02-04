const express = require('express')
const router  = express.Router()
const DailyDevotion  = require('../Models/DailyDevotionalGuide')


router.get('/DailyDevotional', (req,res)=>{
res.send('daily')
})


router.post('/DailyDevotional', (req,res)=>{
res.send('daily')
})

router.get('/',(req,res)=>{
    res.send("you are welcome to this api")
})


module.exports = router