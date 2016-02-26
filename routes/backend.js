var express = require('express');
var router = express.Router();

var backendPartials = {
    layout: 'backend/layout'
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('backend/index.hjs', {
    partials: backendPartials
  });
});

module.exports = router;
