// Create express Router (that inglobe a set of api)
var Router = require('express').Router();
var Item = require('../models').Item;

// Middleware to read POST's bodies
Router.use(require('body-parser').json());

/********************* Categories ********************/

// GET /categories -> an object with all categories
Router.get('/', function(req, res) {
    Item.find({}, function(err, data) {
        if(err) 
          res.sendStatus(500); //generic error
        else 
          res.json(data);
    });
});

// GET /categories/smartphones  -> object with a category 
Router.get('/:category', function(req, res) {
    Item.find({category: req.params.category}, function(err, data) {
        if(err) res.sendStatus(500);
        else res.json(data);
    });
});

// POST /categories -> add a new category
Router.post('/', function(req, res) {
    Item.create(
        {
            //title: req.params.title,
            category: req.params.category,
            //features: req.params.features
        }, 
        function(err, data) {
            if(err) res.sendStatus(500);
            else res.sendStatus(201);
        }
    );
});

// PUT /categories/smartphones -> modifies smartphone category
Router.put('/:category', function(req, res) {
    Item.update(
        //Conditions
        {
            category: req.params.category, 
        },
        //Updates
        {
            category: req.params.newCategory,
        },
        //Callback
        function(err, data) {
            if(err) res.sendStatus(500);
            else res.sendStatus(201);
        }
    );
});

module.exports = Router;