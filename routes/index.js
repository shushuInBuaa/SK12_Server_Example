var express = require('express');
var router = express.Router();
var questionBackOperation=require('./subRoutes/questionBackOperation');
var login=require('./subRoutes/login');
var examPlanOperation=require('./subRoutes/examPlanOperation');

/* GET home page. */
router.use(questionBackOperation);
router.use(login);
router.use(examPlanOperation);

module.exports = router;
