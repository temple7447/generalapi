const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyDevotion = new Schema({
    titleValue:{
        type:String,
        required:true
    },
    contentValue:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('GKS', DailyDevotion);