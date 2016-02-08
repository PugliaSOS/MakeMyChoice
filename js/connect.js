var mongoose = require('mongoose');
mongoose.connect('mongodb://host/database');

// check connection
if(mongoose.connection.readyState == 0){
    console.log('failed connection');
    process.exit(1);
} else {
    console.log('successful connection');
    var db = mongoose.connection;
    // db operations
}
