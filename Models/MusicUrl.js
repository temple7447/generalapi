const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const MusicUrl = new Schema({
    name: String,
    size:String,
    type:String,
    musicUrl:String
})


module.exports = mongoose.model("GksMusicUrl", MusicUrl)