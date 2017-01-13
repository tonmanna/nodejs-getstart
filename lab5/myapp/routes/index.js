var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/page1/:name?/:surname',function(req,res){
 console.log(req.params);
 res.send("HELLO");
});
module.exports = router;
