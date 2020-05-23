'use strict';

var utils = require('../utils/writer.js');
var Genre = require('../service/GenreService');

module.exports.genreGET = function genreGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Genre.genreGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};

module.exports.getBooksByGenre = function getBooksByGenre (req, res, next) {
  var genreTitle = req.swagger.params['genreTitle'].value;
  Genre.getBooksByGenre(genreTitle)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};
