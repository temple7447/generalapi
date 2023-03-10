const mongoose = require('mongoose')
const MONGODB = process.env.MONGODB || "mongodb://localhost:27017/MrRached"
const ONLINEMONGODB = process.env.ONLINEMONGODB || "mongodb+srv://myapp:Mechatronic7447@cluster0.ohii5.mongodb.net/?retryWrites=true&w=majority"
const MONGODBE = process.env.MONGODBE 

mongoose.set('strictQuery', false);
const connectDB = async ()=>{
    try {
        
       const conn = await mongoose.connect(ONLINEMONGODB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,

       })
       .then(()=>{
        console.log("mongoose is connected the database")
       })
       .catch((err)=>{
        console.log(err)
       })

    } catch (error) {
        console.log(error)
        
    }

}



module.exports = connectDB