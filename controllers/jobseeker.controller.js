const JobSeeker = require('../models/jobseeker');

module.exports ={
  index:(req,res)=>{
    res.render('jobseeker',{user:req.user});
  },
  profileIndex:(req,res)=>{
    res.render('profile',{
      user:req.user
    })
  },
  login:(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    JobSeeker.find({email:email,password:password}).then((result)=>{
      if(result){
        res.redirect('/profile/:id',{
          user:result[0]
        })
      }
    })
  }
}