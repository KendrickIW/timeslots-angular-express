var express = require('express');
var router = express.Router();

var data = {
  title: 'Express',
  time_slots: [
    { start: '9:00am', end: '10:00am' },
    { start: '9:00am', end: '10:00am' },
    { start: '9:00am', end: '10:00am' }
  ]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;
