'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');
const utilities = require('../utils/utils');

module.exports.getCart = function getCart (req, res, next) {
  User.getCart(req.headers.cookie)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};

module.exports.getUserPurchases = function getUserPurchases (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.getUserPurchases(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userLoginPOST = function userLoginPOST (req, res, next) {
  var body = req.body;
  User.userLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};

module.exports.userLogoutPOST = function userLogoutPOST (req, res, next) {
  var cookies = utilities.getCookies(req.headers.cookie);
  var session_id = cookies.JSESSIONID;
  User.userLogoutPOST(session_id)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};

module.exports.userRegisterPOST = function userRegisterPOST (req, res) {
  var body = req.body;
  User.userRegisterPOST(body)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};
