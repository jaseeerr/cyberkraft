const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    uname:String,
    password:String
   
})





module.exports = mongoose.model('admin',adminSchema)
