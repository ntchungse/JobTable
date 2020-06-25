const Company = require('../models/company');

module.exports = {
  index:(req,res)=>{
    res.render('company',{user:req.user})
  },
  login: (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    Company.find({ email: email, password: password }).then((result) => { 
      if (result) {
        res.render("company", {
          user: result[0],
        });
      }
    });
  },
  postNews: (req, res) => {
    res.render("company-dashboard");
  },
  dashboard:(req,res)=>{
    res.render("dashboard",{user:req.user});
  }
};
