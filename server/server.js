var express = require('express');

var app = express();

app.use('/', express.static(__dirname + '/../client/www'));


var port = process.env.PORT || 4321;
app.listen(port);
console.log("listeniing to port:" + port);