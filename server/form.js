var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/api/form', function(req, res, next) {
  res.render('form', { title: 'This is my form route' });
});

module.exports = router;
