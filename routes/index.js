var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.get('/planer', function(req, res, next) {
  res.render('planer');
});

/* GET home page. */
router.get('/omos', function(req, res, next) {
  res.render('omos');
});

module.exports = router;
