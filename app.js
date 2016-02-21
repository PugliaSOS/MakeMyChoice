var mongoose = require('mongoose');
var config = require('./config');
var chooseTheBest = require('./choose-the-best');

//Connect to DB using data setted in connect.js(uri, user, pass)
mongoose.connect(config.mongo.host, config.mongo.user, config.mongo.pass);

var db = mongoose.connection;

/* When .db is connected, store all defined products and choose the best 
 * products following the inserted preferences 
 */
db.on('connected', function () {  
    createDocumentsAndInsertIntoDB();
    chooseTheBest('Smartphones', {ram: 2048, camera: 8, price: 200});
});