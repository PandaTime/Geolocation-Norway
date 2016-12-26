'user strict';

const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser');

const routes = require('./server/routes'),
      config = require('./server/config');

var app = express();
// middleware
app.use(bodyParser.json());

// routing
require('./server/routes')(app, config);
// default route
app.use(express.static(path.normalize(config.rootPath + '/public')));
// listening
app.listen(config.port, ()=>{console.log(`Listening on port ${config.port}..`);});