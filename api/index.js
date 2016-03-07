var app = require('express')();
var port = process.env.PORT || 8001;

//it works only with /categories route
app.use("/categories", require('./categories'));
app.use("/categories", require('./products'));

app.listen(port);
console.log('app is listening on localhost:' + port);