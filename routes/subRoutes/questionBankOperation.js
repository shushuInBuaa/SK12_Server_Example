/**
 * Created by shushu on 10/02/2019.
 */
var express = require('express');
var fs=require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/checkQuestionBank', function(req, res, next) {
    let version="1.1";
    if(version!=req.query.version)
    {
        fs.readFile('././files/questionBank.json',(err,data)=>{
        let questions=JSON.parse(data);
        let paper
    });
    }
    res.send("OK");
});

router.get('/getUpToDateQuestionBank', function(req,res,next){

})

module.exports = router;
