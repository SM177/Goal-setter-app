const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = async() => {
    try {
        let connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`database connected on host : ${mongoose.connection.host.cyan}`);
        
    } catch (error) {
        console.log(error);
    }

}


module.exports = connectDB;