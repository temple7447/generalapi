const express = require('express')
const router  = express.Router()
const DailyDevotion  = require('../Models/DailyDevotionalGuide')




router.get('/dailydevotional', (req,res)=>{

    DailyDevotion.find({},(err, inform)=>{
        if(err) return err

        res.send(inform)
    })
})


router.post('/dailydevotional', (req,res)=>{
const {titleValue,contentValue, themeValue,dateValue } = req.body;

console.log(titleValue)
const Dailynew = new DailyDevotion({
    titleValue,
    contentValue,
    themeValue,
    dateValue
})

Dailynew.save()
.then((res)=>{console.log("it was sucess" , res)})
.catch((err)=> console.log(err))
})

router.get('/',(req,res)=>{
    res.send("you are welcome to this api")
})


module.exports = router