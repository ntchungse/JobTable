const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const key = require('./key');
const JobSeeker = require('../models/jobseeker');
const Company = require('../models/company');

passport.serializeUser((user,done)=>{
  done(null,{id:user.id,role:user.roles});
});
passport.deserializeUser((obj,done)=>{
  if(obj.role === 'JobSeeker'){
    JobSeeker.findById(obj.id).then((user)=>{
      done(null,user)
    })
  }else{
    Company.findById(obj.id).then((user)=>{
      done(null,user)
    })
  }
  
})

passport.use(
  new GoogleStrategy({
    clientID:key.googleClientID,
    clientSecret:key.googleClientSecret,
    callbackURL:'/auth/google/redirect'
  },(accessToken,refreshToken,profile,done) =>{
    JobSeeker.findOne({email:profile._json.email}).then((currentUser)=>{
      if(currentUser){
        done(null,currentUser);
      }else{
        new JobSeeker({
          name:profile.displayName,
          email:profile._json.email, 
          avt:profile._json.picture,
          roles:"JobSeeker"   
        }).save().then((newUser)=>{
          done(null,newUser);
        })
      }
    })
    
  }
));
passport.use('google-company',
  new GoogleStrategy({
    clientID:key.googleClientID,
    clientSecret:key.googleClientSecret,
    callbackURL:'/auth/google/callback'
  },(accessToken,refreshToken,profile,done) =>{
    Company.findOne({email:profile._json.email}).then((currentUser)=>{
      if(currentUser){
        done(null,currentUser);
      }else{
        new Company({
          name:profile.displayName,
          email:profile._json.email, 
          avt:profile._json.picture,
          roles:"Company"
        }).save().then((newUser)=>{
          done(null,newUser);
        })
      }
    })
    
  }
));