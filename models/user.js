const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    email : {type : String, required : true, unique : true},
    userType : String,
    password : String,
    token : String,
},{timestamps: true})

module.exports = mongoose.model('user',userSchema)