const router = require('express').Router();
const controller = require('../controllers/jobseeker.controller');

router.get('/',controller.index);
router.get('/profile',controller.profileIndex);
router.post('/login',controller.login);


module.exports = router;