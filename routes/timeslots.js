var express = require('express');
var router = express.Router();

var hours = [ 9, 10, 11, 12, 13, 14, 15, 16];

var data = hours.map(function(x) {
  var date = new Date();
  date.setHours(x, 0, 0, 0);
  var start = date.toLocaleTimeString();
  date.setHours(x+1, 0, 0, 0);
  var end = date.toLocaleTimeString();
  return {
    start: start,
    end: end
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;
