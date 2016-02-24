var app = require('express')();

//it works only with /categories route
app.use("/categories", require('./categories'));


//app.use(require('./products'));


app.listen(8001);