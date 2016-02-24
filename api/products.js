// Create express Router (that inglobe a set of api)
var Router = require('express').Router();
var Item = require('../models').Item;

// Middleware to read POST's bodies
Router.use(require('body-parser').json());


/************************* Products *******************/

// GET /categories/smartphones/products -> an object with all smartphones
Router.get('/categories/:category/products', function(req, res) {
    res.sendStatus(501);
});

// GET /categories/smartphones/products/iphone -> an object with a smartphone 
Router.get('/categories/:category/products/:product', function(req, res) {
    res.sendStatus(501);
});

// POST /categories/smartphones/products -> add a new product into a category
Router.post('/categories/:category/products', function(req, res) {
    res.sendStatus(501);
});

// PUT /categories/smartphones/products/iphone -> modifies iphone characterstics
Router.put('/categories/:category/products/:product', function(req, res) {
    res.sendStatus(501);
});

module.exports = Router;