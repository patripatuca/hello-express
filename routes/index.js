var express = require('express');
var router = express.Router();
var products=require("../models/products.js")
/* GET home page. */
router.get('/', function(req, res, next) {
  
    
  res.render('index', { title: 'to home patri' ,products});
});

module.exports = router;
