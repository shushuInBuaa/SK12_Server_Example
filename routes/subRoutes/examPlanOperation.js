/**
 * Created by shushu on 10/02/2019.
 */
var express = require('express');
var fs=require('fs');
var router = express.Router();

router.get('/getAvailableExamPlan', function(req, res, next) {
    if(req.query.candidateId=="12211001")
        res.send({"plan”":{"planid":"20181010100000110000","name":"期末考试","starttime":"2018/10/10 10:00:00","endtime":"2018/10/10 11:00:00"}});
    else
        res.send({"plan":null});
});

router.get('/getExamPaper',function(req,res,next){
    if(req.query.candidateId=="12211001"&&req.query.planid=="20181010100000110000")
    fs.readFile('././files/paperexample.json',(err,data)=>{
        let questions=JSON.parse(data);
        res.send(questions);
        });

});

module.exports=router;