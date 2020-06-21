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
  dashboard: (req, res) => {
    res.render("company-dashboard");
  },
};
