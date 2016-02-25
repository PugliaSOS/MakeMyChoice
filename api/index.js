var app = require('express')();

//it works only with /categories route
app.use("/categories", require('./categories'));
app.use("/categories", require('./products'));

app.listen(8001);