const router = require('express').Router();
const News = require('../models/news');

function retrieveNews(id, callback) {
  News.find({_id: id}, function(err, news) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, news[0]);
    }
  });
};
router.get('/:id',(req,res)=>{
  retrieveNews(req.params.id,function(err,news){
    if(err){
      console.log(err);
    }else{
      res.render('news',{news:news});
    }
  })
})
router.get('news/:id',(req,res)=>{
  retrieveNews(req.params.id,function(err,news){
    if(err){
      console.log(err);
    }else{
      console.log(news);
      res.render('news',{news:news});
    }
  })
})

module.exports = router;
