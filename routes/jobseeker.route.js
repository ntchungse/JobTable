const router = require('express').Router();
const controller = require('../controllers/jobseeker.controller');
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

router.get('/',controller.index);
router.get('/profile',controller.profileIndex);
router.post('/login',controller.login);
router.get('/news/:id',(req,res)=>{
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