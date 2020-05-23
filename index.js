'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');

var schedule = require('node-schedule');

var express = require('express');
var app = express();
var oasTools = require('oas-tools');
var jsyaml = require('js-yaml');
var database = require('./other/database/database');
var serverPort = process.env.PORT || 8080;

// Build tables
database.db_builder();

// Check for expired session ids
schedule.scheduleJob('* /5 * * * *', function(){
    console.log('Checking for expired cookies ...');
    var now = new Date();
    now.setHours(now.getHours() - 6);
    Math.round(now.getTime()/1000);

    database.knex('sessionIds')
        .where('timestamp', '<', now)
        .delete()
        .then((rows) => {
            console.log(rows);
            console.log('Check done!')
        })
});

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var oasDoc = jsyaml.safeLoad(spec);

var options_object = {
  docs: {
    apiDocs: '/spec.yaml',
    apiDocsPrefix: '/backend',
    swaggerUi: '/swaggerui',
    swaggerUiPrefix: '/backend'
  }
};

oasTools.configure(options_object);

// Initialize the Swagger middleware
oasTools.initializeMiddleware(oasDoc, app, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Set base path for index.html
  app.use(express.static(__dirname + '/public'));

  // Set base path for web pages
  app.use(express.static(__dirname + '/public/pages'));

  // Set base path for backend doc
  app.use(express.static(__dirname + '/'));

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d', serverPort);
    console.log('Swagger-ui is available on /docs');
  });

});
