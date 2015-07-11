/**
 * Created by cgfrost on 14/03/2014.
 */

/*jslint node: true */
"use strict";

var express = require('express');
var app = express();


// Configuration
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

var port = process.env.PORT || 3000;

var webServer = app.listen(port, function () {
  console.log('Listening on port %d', webServer.address().port);
});
