const express = require('express')
const router  = express.Router()


router.get('/DailyDevotional', (req,res)=>{
res.send('daily')
})



module.exports = router