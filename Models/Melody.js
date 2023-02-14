const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Melody= new Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    linkImg:{
        type:String,
        required:true 
    }
})

module.exports = mongoose.model('Melody', Melody);