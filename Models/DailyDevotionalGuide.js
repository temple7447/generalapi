const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const DailyDevotion = new Schema({
    title:{

    },
    content:{

    },
    createdAt:{
        Date: new Date().toLocaleString(),
    }
})

module.exports = mongoose.models('GKS', DailyDevotion);