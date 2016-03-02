// Create express Router (that inglobe a set of api)
var Router = require('express').Router();
var Item = require('../models').Item;

// Middleware to read POST's bodies
Router.use(require('body-parser').json());

/********************* Categories ********************/

// GET /categories -> an object with all categories
Router.get('/', function(req, res) {
    Item.distinct('categories', function(err, data) {
        if(err) 
          res.sendStatus(500); //generic error
        else
          res.json(data);
    });
});

module.exports = Router;