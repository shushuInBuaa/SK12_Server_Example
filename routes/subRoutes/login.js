var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  if(req.query.username===req.query.password)
    res.send({"accepted":true, "username":"shushu"});
  else
    res.send({"accepted":false});

});

router.post('/login', function(req,res,next){
    if(req.body.username===req.body.password)
        res.send({result:"1"});
    else
        res.send({result:"0"});
})

module.exports = router;
