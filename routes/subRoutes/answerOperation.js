/**
 * Created by shushu on 13/02/2019.
 */
var express=require('express');
var router=express.Router();

router.post('/uploadAnswers',(req,res,next)=>{
    console.log(req.body.examPaperId);
    console.log(req.body.answers);

    res.send({"accepted":true});
});

module.exports=router;