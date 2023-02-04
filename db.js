const mongoose = require('mongoose');

const MONGOOSEPORT = ''
const parameters = {

}

const connet = mongoose.connet(MONGOOSEPORT)
.then((respons)=>{
    console.log(`DataBase was connect...`)
    console.log(respons)
})
.catch((err)=>{ console.log(err)})