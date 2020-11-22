const express=require('express');
const router=express.Router();
var Vendor=require('../models/vendor');
var Item=require('../models/item');

router.post('/register',(req,res,next)=>{
    var vendor=new Vendor({
        mobile:req.body.mobile,
        password:req.body.password
    });
  let promise= vendor.save();
  promise.then((doc)=>{
    res.status(200).json({message:"Registration Successfull"});
  })
  promise.catch((err)=>{
    console.log(err);
    res.status(500).json({message:"Registration Failed"});
  })
}); 

router.post('/login',(req,res,next)=>{
  let promise= Vendor.findOne({mobile:req.body.mobile}).exec();
    promise.then((docs)=>{
    if(docs){
        let  passwordCheck=Vendor.findOne({password:req.body.password}).exec();
        passwordCheck.then((doc)=>{
            if(doc){
                res.status(200).json({message:"Vendor Login Successfull!!"});
            }
            else{
                res.status(500).json({message:"Incorrect Password!!"});
            }
         
        });
        passwordCheck.catch(err=>{
          res.status(500).json({message:"Incorrect Password!!"});
        })
      }
    else{
      res.status(500).json({message:"You are not registered!!"});
    }
});
  promise.catch((err)=>{
    res.status(500).json({message:"You are not registered!!"});
  });
});
router.get('/list',(req,res,next)=>{
   let promise=Item.find({}).exec();
   promise.then(items=>{
    res.status(200).json({msg:items});
   });
   promise.catch(err=>{
    res.status(500).json({errmsg:err});
   });
})  

module.exports=router;
