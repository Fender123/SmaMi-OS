var express = require('express');
var router = express.Router();
var pageSettings = require('../lib/pageSettings.js');

var backendPartials = {
    layout: 'backend/layout'
};

/* GET users listing. */
router.get('/', function (req, res, next) {
    pageSettings.get().then(function(settings){
        res.render('backend/index.hjs', {
            tmp: JSON.stringify(settings),
            partials: backendPartials
        });
    });
});

module.exports = router;
