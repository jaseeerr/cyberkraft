const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/cyberkraft',{useNewUrlParser:true})

mongoose.connection.once('open',()=>console.log('database connection success')).on('error',error=>{
console.log(error);
})