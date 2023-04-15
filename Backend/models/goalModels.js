const mongoose = require('mongoose');
const User = require('../models/userModel')

const goalModel = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    goals:{
        type:String,
        required :[true,'Please enter the field']
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('Goal',goalModel);