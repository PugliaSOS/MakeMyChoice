// Create express Router (that inglobe a set of api)
var Router = require('express').Router();
var Item = require('../models').Item;

// Middleware to read POST's bodies
Router.use(require('body-parser').json());

/********************* Categories ********************/
// GET /categories/smartphones  -> object with a category 
Router.get('/:category', function(req, res) {
    res.sendStatus(501);
});

// GET /categories -> an object with all categories
Router.get('/', function(req, res) {
    Item.find({/*title:  "ciao"*/}, function(err, data){
      if(err) res.sendStatus(500);
      else res.json(data);
    });
});

// POST /categories -> add a new category
Router.post('/', function(req, res) {
    res.sendStatus(501);
});

// PUT /categories/smartphones -> modifies smartphone category
Router.put('/:category', function(req, res) {
    res.sendStatus(501);
});

module.exports = Router;