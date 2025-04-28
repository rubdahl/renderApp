var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/message', jsonParser, async function(req, res, next) {
  var message = "Welcome to my hubmle aboud"
  res.status(200).json({ message: message});
});

router.get('/about', jsonParser, async function(req, res, next) {
  res.status(200).json({ Name: "Ruben Dahl", Description: "This is a express project deployed using Render.Com"})
})

router.get('/random-number', jsonParser, async function(req, res, next) {
  var number = Math.floor(Math.random()* 10) + 1;
  res.status(200).json({ RandomNumber: number});
})

module.exports = router;
