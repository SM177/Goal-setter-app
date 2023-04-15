const mongoose = require('mongoose');


const userModel = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please insert your name']
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please enter your password'],
    }
})


module.exports = mongoose.model('User', userModel);