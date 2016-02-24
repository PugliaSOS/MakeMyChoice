var app = require('express')();

//it works only with /categories route
app.use("/categories", require('./categories'));
app.use("/categories/:category/products", require('./products'));


app.listen(8001);