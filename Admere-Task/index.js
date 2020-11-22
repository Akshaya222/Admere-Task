const express=require('express');
const mongoose=require('mongoose');
const path=require("path");
const bodyparser=require('body-parser');
const cors=require('cors');
const createError=require('http-errors');

const application=express();

const dbconnection=require("./database/mongodb");
//user
const UserRoutes=require('./routes/users');
//vendor
const VendorRoutes=require('./routes/vendors');

application.use(bodyparser.urlencoded({
    extended:true
}));
application.use(bodyparser.json());
application.use(cors());;

//user
application.use('/user',UserRoutes);
//vendor
application.use('/vendor',VendorRoutes);

application.listen("3000",()=>{
    console.log("server started at port 3000");
})