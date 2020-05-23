'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');

module.exports.addToCartPOST = function addToCartPOST (req, res, next) {
    var bookId = req.swagger.params['bookId'].value;
    Book.addToCartPOST(bookId, req.headers.cookie)
        .then(function (response) {
            utils.writeJson(res, response, response.status);
        })
        .catch(function (response) {
            utils.writeJson(res, response, response.status);
        });
};

module.exports.booksGET = function booksGET (req, res, next) {
    var isBestseller = req.swagger.params['isBestseller'].value;
    var isFavourite = req.swagger.params['isFavourite'].value;
    var offset = req.swagger.params['offset'].value;
    var limit = req.swagger.params['limit'].value;
    Book.booksGET(isBestseller,isFavourite,offset,limit)
        .then(function (response) {
            utils.writeJson(res, response, response.status);
        })
        .catch(function (response) {
            utils.writeJson(res, response, response.status);
        });
};

module.exports.getBookById = function getBookById (req, res, next) {
    var bookISBN = req.swagger.params['bookId'].value;
    Book.getBookById(bookISBN)
        .then(function (response) {
            utils.writeJson(res, response, response.status);
        })
        .catch(function (response) {
            utils.writeJson(res, response, response.status);
        });
};

module.exports.getReviews = function getReviews (req, res, next) {
    var bookId = req.swagger.params['bookId'].value;
    Book.getReviews(bookId)
        .then(function (response) {
            utils.writeJson(res, response, response.status);
        })
        .catch(function (response) {
            utils.writeJson(res, response, response.status);
        });
};

module.exports.removeFromCartPOST = function removeFromCartPOST (req, res, next) {
    var bookId = req.swagger.params['bookId'].value;
    Book.removeFromCartPOST(bookId, req.headers.cookie)
        .then(function (response) {
            utils.writeJson(res, response, response.status);
        })
        .catch(function (response) {
            utils.writeJson(res, response, response.status);
        });
};
