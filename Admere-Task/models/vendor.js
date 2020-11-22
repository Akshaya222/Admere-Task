const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const VendorSchema=new Schema({
     mobile:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Vendor',VendorSchema);