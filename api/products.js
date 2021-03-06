// Create express Router (that inglobe a set of api)
var Router = require('express').Router();
var Item = require('../models').Item;

// Middleware to read POST's bodies
Router.use(require('body-parser').json());


/************************* Products *******************/

// GET /categories/smartphones/products -> an object with all smartphones
Router.get('/:category/products', function(req, res) {
  Item.find({categories: req.params.category}, '-__v' ,function(err, data) {
     if(err) res.sendStatus(500);
     else res.json(data);
  });
});

// GET /categories/smartphones/products/iphone -> an object with a smartphone 
Router.get('/:category/products/:productId', function(req, res) {
  Item.find(
  	{
      _id: req.params.productId,
      categories: req.params.category 
   	},
    '-__v', 
   	function(err, data) {
      if(err) res.sendStatus(500);
      else res.json(data);
    }
  );
});


// POST /categories/smartphones/products -> add a new product into a category
Router.post('/:category/products', function(req, res) {
  req.body.categories = req.params.category; 
  Item.create(req.body, function(err, data) {
    if(err) {
      res.sendStatus(500);
    }
    else {
      res.sendStatus(200);
    }
  });
});


// PUT /categories/smartphones/products/iphone -> modifies iphone characterstics
Router.put('/:category/products/:productId', function(req, res) {
  Item.findByIdAndUpdate(
    //object to edit
    req.params.productId,
    //updates to apply
    req.body,
    //callback
    function(err, data) {
      if(err) res.sendStatus(500);
      else res.sendStatus(200)
    }
  );
});

module.exports = Router;