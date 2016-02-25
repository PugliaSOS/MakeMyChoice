var mongoose = require('mongoose');
var config = require('./config');
//var chooseTheBest = require('./choose-the-best');
require('./api'); //it refers to index.js

//Connect to DB using data setted in connect.js(uri, user, pass)
mongoose.connect(config.mongo.host);
