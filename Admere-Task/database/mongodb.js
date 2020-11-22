const mongoose=require('mongoose');
const { db } = require('../models/user');

mongoose.connect('mongodb://localhost:27017/AdmereTask',{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log("MongoDB Connection Successfull!!");
    }
    else{
        console.log("MongoDB connection failed");
    }
});
