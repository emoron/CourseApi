var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
/* GET home page. */
router.get('/', function (req, res) {
  const pathFile = path.join(__dirname, '../data/movies.json')
  const file = fs.readFileSync(pathFile, 'utf-8')
  const movies = JSON.parse(file)
  console.log(movies[1])
  res.render('index',movies[1])
});



module.exports = router;