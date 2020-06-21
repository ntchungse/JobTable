const router = require("express").Router();
const News = require("../models/news");
const JobSeeker = require("../models/jobseeker");
//JobSeeker
router.put("/jobseeker/:id",(req,res)=>{
  JobSeeker.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    JobSeeker.findOne({_id:req.params.id}).then(function(jobseeker){
      res.send(jobseeker);
    })
  })
})

// News
router.get("/news",(req,res)=>{
  News.find().then((news)=>{
    res.send(news);
  },(e)=>{
    res.status(400).send(e);
  })
})
router.post("/news", (req, res) => {
  var news = new News({
    title: req.body.title,
    location: req.body.location,
    level: req.body.level,
    field: req.body.field,
    type: req.body.type,
    salary: {
      min: req.body.min,
      max: req.body.max,
      currency: req.body.currency,
    },
  });
  news.save().then(
    (result) => {
      res.send(result);
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});

module.exports = router;
