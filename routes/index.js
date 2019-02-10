var express = require('express');
var router = express.Router();
var questionBackOperation=require('./subRoutes/questionBackOperation');
var login=require('./subRoutes/login');

/* GET home page. */
router.use(questionBackOperation);
router.use(login);

module.exports = router;
