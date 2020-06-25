const router = require("express").Router();
const News = require("../models/news");
const JobSeeker = require("../models/jobseeker");
const Company = require("../models/company");


function retrieveCompany(id, callback) {
  Company.find({_id: id}, function(err, users) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, users[0]);
    }
  });
};
function retrieveNews(id, callback) {
  News.find({_id: id}, function(err, news) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, news[0]);
    }
  });
};
//JobSeeker
router.post("/jobseeker/:id", (req, res) => {
  JobSeeker.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      gender: req.body.gender,
      phoneNumber: req.body.phoneNumber,
    }
  ).then(function () {
    JobSeeker.findOne({ _id: req.params.id }).then(function (jobseeker) {
      res.json(jobseeker);
    });
  });
});
router.post("/jobseeker", (req, res) => {
  let newJobSeeker = new JobSeeker({
    email: req.body.emailRegis,
    password: req.body.passwordRegis,
  })
    .save()
    .then(
      (result) => {
        res.json(result);
      },
      (e) => {
        res.status(400).send(e);
      }
    );
});
// News
router.get("/news/:id",(req,res)=>{
  let id = req.params.id;
  retrieveNews(id,function(err,news){
    if(err){
      console.log(err);
    }else{
      console.log(news);
      res.json(news);
    }
  })
})
router.get("/news", (req, res) => {
  News.find().then(
    (news) => {
      res.json(news);
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});
router.post("/news", (req, res) => {
  let id = req.user.id;
  retrieveCompany(req.user.id, function(err, com) {
    if (err) {
      console.log(err);
    }
    else{
      let news = new News({
        title: req.body.title,
        location: req.body.location,
        level: req.body.level,
        field: req.body.field,
        type: req.body.type,
        companyId:com._id,
        salary: {
          min: req.body.min,
          max: req.body.max,
          currency: req.body.currency,
        },
        companyName:com.name,
        avt:com.avt,
      });
      news.save().then(
        (result) => {
          res.json(result);
        },
        (e) => {
          res.status(400).send(e);
        }
      );
      Company.findByIdAndUpdate({_id : req.user.id},{$push:{newsId: news._id}}).then(function(){
        Company.findOne({ _id: req.user.id }).then(function (result) {
        });
      });
    }
  });
});
router.post('/news/:id',(req,res)=>{
  News.findByIdAndUpdate({_id : req.params.id},{$push:{jobseekerId: req.user.id}}).then(function(){
    News.findOne({ _id: req.params.id }).then(function (result) {
      res.json(result);
    });
  });
})
//Company
router.get("/company",(req,res)=>{
  Company.find().then(
    (news) => {
      res.json(news);
    },
    (e) => {
      res.status(400).send(e);
    }
  );
})
router.post("/company", (req, res) => {
  let newCompany = new Company({
    email: req.body.emailRegisCompany,
    password: req.passwordRegisCompany,
  })
    .save()
    .then(
      (result) => {
        res.json(result);
      },
      (e) => {
        res.status(400).send(e);
      }
    );
});
router.post("/company/:id", (req, res) => {
  Company.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      location: req.body.location,
      phoneNumber: req.body.phoneNumber,
    }
  ).then(function () {
    Company.findOne({ _id: req.params.id }).then(function (result) {
      res.json(result);
    });
  });
});

module.exports = router;
