const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Music = new Schema({
    name: String,
    data: Buffer,
})


module.exports = mongoose.model("GksMusic", Music)