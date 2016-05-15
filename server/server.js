var express = require('express');

var app = express();
var port = process.env.PORT || 4321;
app.listen(port);
console.log("listeniing to port:" + port);