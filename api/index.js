var app = require('express')();
var port = process.env.PORT || 8001;

//it works only with /categories route
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use("/categories", require('./categories'));
app.use("/categories", require('./products'));

app.listen(port);
console.log('app is listening on localhost:' + port);