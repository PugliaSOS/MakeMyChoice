// Create express app
var app = require('express')();

// Middleware to read POST's bodies
app.use(require('body-parser').json());

// GET / -> index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

/************************* Products *******************/

// GET /categories/smartphones/products -> an object with all smartphones
app.get('/categories/:category/products', function(req, res) {
    res.sendStatus(501);
});

// GET /categories/smartphones/products/iphone -> an object with a smartphone 
app.get('/categories/:category/products/:product', function(req, res) {
    res.sendStatus(501);
});

// POST /categories/smartphones/products -> add a new product into a category
app.post('/categories/:category/products', function(req, res) {
    res.sendStatus(501);
});

// PUT /categories/smartphones/products/iphone -> modifies iphone characterstics
app.put('/categories/:category/products/:product', function(req, res) {
    res.sendStatus(501);
});

app.listen(8000);
