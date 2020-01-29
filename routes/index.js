var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const products=[
    {nombre:"Microondas",precio:45,existencias:6},
    {nombre:"frigorifico",precio:200,existencias:4},
    {nombre:"Lámpara",precio:20,existencias:14},
    {nombre:"Tv",precio:90,existencias:0}
  ];
  res.render('index', { title: 'to home patri' ,products});
});

module.exports = router;
