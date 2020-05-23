'use strict';

var utils = require('../utils/writer.js');
var Author = require('../service/AuthorService');

module.exports.authorGET = function authorGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Author.authorGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};

module.exports.getAuthorById = function getAuthorById (req, res, next) {
  var authorId = req.swagger.params['authorId'].value;
  Author.getAuthorById(authorId)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};
