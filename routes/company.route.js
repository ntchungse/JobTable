const router = require('express').Router();
const controller = require('../controllers/company.controller');

router.get('/',controller.index);
router.post('/login',controller.login);
router.get('/dashboard',controller.dashboard);
module.exports = router;