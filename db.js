const mongoose = require('mongoose');

const MONGOOSEPORT = ''
const parameters = {
    useUnif
}

const connet = mongoose.connet(MONGOOSEPORT,parameters)
.then((respons)=>{
    console.log(`DataBase was connect...`)
    console.log(respons)
})
.catch((err)=>{ console.log(err)})