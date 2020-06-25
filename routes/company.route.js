const router = require('express').Router();
const controller = require('../controllers/company.controller');

router.get('/profile',controller.index);
router.post('/login',controller.login);
router.get('/post',controller.postNews);
router.get('/dashboard',controller.dashboard);
module.exports = router;