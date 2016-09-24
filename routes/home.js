var express = require('express');
var homeController = require('../controllers/homeController.js');
module.exports = function () {
  var router = express.Router();
  router.get('/', homeController.index);
  return router;
};
