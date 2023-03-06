const express = require('express')
const router = express.Router()
const BibleQuiz = require('../component/BibleQuiz')




router.get('/bibleQuiz',(req,res)=>{

    res.send(BibleQuiz)

})







module.exports = router