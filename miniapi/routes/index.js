var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
/* GET home page. */
router.get('/', function (req, res) {
  const pathFile = path.join(__dirname, '../data/movies.csv')
  const file = fs.readFileSync(pathFile, 'utf-8')
  res.send(file)
});

router.get('/chart', function (req, res, next) {
  // res.render('index', { title: 'CHARTS' });
  res.sendFile(path.join(__dirname, '../views/chart.html'));
});
module.exports = router;
