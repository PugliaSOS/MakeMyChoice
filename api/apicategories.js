// Create express app
var app = require('express')();

// Middleware to read POST's bodies
app.use(require('body-parser').json());

// GET / -> index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


/********************* Categories ********************/
// GET /categories/smartphones  -> object with a category 
app.get('/categories/:category', function(req, res) {
    res.sendStatus(501);
});

// GET /categories -> an object with all categories
app.get('/categories', function(req, res) {
    res.sendStatus(501);
});

// POST /categories -> add a new category
app.post('/categories', function(req, res) {
    res.sendStatus(501);
});

// PUT /categories/smartphones -> modifies smartphone category
app.put('/categories/:category', function(req, res) {
    res.sendStatus(501);
});

app.listen(8000);
