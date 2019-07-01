var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../models/places')

module.exports = router;

  //Restful
  router.get('/', function(req, res, next) {

    User.find()
      .then(r => {
        res.send({ success : true, users: r})
      })
      .catch(e => {
        res.send({ success : false})
      })
});

module.exports = router;
