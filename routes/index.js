var express = require('express');
var router = express.Router();
var questionBankOperation=require('./subRoutes/questionBankOperation');
var login=require('./subRoutes/login');
var examPlanOperation=require('./subRoutes/examPlanOperation');
var answerOperation=require('./subRoutes/answerOperation');

/* GET home page. */
router.use(questionBankOperation);
router.use(login);
router.use(examPlanOperation);
router.use(answerOperation);

module.exports = router;
