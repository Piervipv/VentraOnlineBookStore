'use strict';

var utils = require('../utils/writer.js');
var Theme = require('../service/ThemeService');

module.exports.getBooksByTheme = function getBooksByTheme (req, res, next) {
  var themeTitle = req.swagger.params['themeTitle'].value;
  Theme.getBooksByTheme(themeTitle)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};

module.exports.themeGET = function themeGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Theme.themeGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};
