'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventGET = function eventGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Event.eventGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};

module.exports.eventThisMonthGET = function eventGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Event.eventThisMonthGET(offset,limit)
      .then(function (response) {
        utils.writeJson(res, response, response.status);
      })
      .catch(function (response) {
        utils.writeJson(res, response, response.status);
      });
};

module.exports.getEventById = function getEventById (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.getEventById(eventId)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};
