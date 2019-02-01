var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.username===req.query.password)
    res.send({result:"1"});
  else
    res.send({result:"0"});

});

router.post('/', function(req,res,next){
    if(req.body.username===req.body.password)
        res.send({result:"1"});
    else
        res.send({result:"0"});
})

module.exports = router;
