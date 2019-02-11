/**
 * Created by shushu on 10/02/2019.
 */
var express = require('express');
var fs=require('fs');
var router = express.Router();

router.get('/getAvailableExamPlan', function(req, res, next) {
    var date=new Date();
    date.setSeconds(date.getSeconds()+5);
    var starttime=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+(date.getHours()+8)+":"+date.getMinutes()+":"+date.getSeconds();

    var enddate=new Date();
    enddate.setHours(date.getHours()+1);
    var endtime=enddate.getFullYear()+"-"+(enddate.getMonth()+1)+"-"+enddate.getDate()+" "+(enddate.getHours()+8)+":"+enddate.getMinutes()+":"+enddate.getSeconds();

    if(req.query.candidateId=="12211001")
        res.send({"plan":{"planid":"20181010100000110000","name":"期末考试","starttime":starttime,"endtime":endtime}});
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