const router = require('express').Router();
const passport = require('passport');
const passportSetup = require('../config/passport-setup');


//JobSeeker Login By Google
router.get('/google',passport.authenticate('google',{
    scope:['profile','email']
}))
router.get('/google/redirect',passport.authenticate('google'),
    (req,res)=> {
        res.redirect('/jobseeker/profile/');
    }
);
//Company Login By Google
router.get('/google/company',passport.authenticate('google-company',{
    scope:['profile','email']
}))
router.get('/google/callback',passport.authenticate('google-company'),
    (req,res)=>{
        res.redirect('/company');
    });
router.get('/logout',(req,res)=> {
    req.logout();
    res.redirect('/');
})

module.exports = router;