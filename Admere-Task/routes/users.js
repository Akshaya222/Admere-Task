const express=require('express');
const router=express.Router();
var User=require('../models/user');

router.post('/register',(req,res,next)=>{
    var user=new User({
        username:req.body.username,
        password:req.body.password
    });
  let promise=  user.save();
  promise.then((doc)=>{
    res.status(200).json({message:"Registration Successfull"});
  })
  promise.catch((err)=>{
    console.log(err);
    res.status(500).json({message:"Registration Failed"});
  })
}); 

router.post('/login',(req,res,next)=>{
   let promise= User.findOne({username:req.body.username}).exec();
    promise.then((docs)=>{
        if(docs){
            let  passwordCheck=User.findOne({password:req.body.password}).exec();
            passwordCheck.then((doc)=>{
                if(doc){
                    res.status(200).json({message:"User Login Successfull!!"});
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
router.get('/register',(req,res,next)=>{
    res.json("Success");
})  


module.exports=router;
