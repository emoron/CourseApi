var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
/* GET home page. */
router.get('/', function (req, res) {
  const pathFile = path.join(__dirname, '../data/movies.csv')
  const file = fs.readFileSync(pathFile, 'utf-8')
  const lines = file.split('\n')
  const movies = []
  const headers = lines[0].split(',')
  for (let i = 1; i < lines.length; i++) {
    const movie = {}
    const currentLine = lines[i].split(',')
    for (let j = 0; j < headers.length; j++) {
      movie[headers[j]] = currentLine[j]
    }
    movies.push(movie)
  }
  res.render('index',movies[1])
});



module.exports = router;