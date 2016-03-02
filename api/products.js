// Create express Router (that inglobe a set of api)
var Router = require('express').Router();
var Item = require('../models').Item;

// Middleware to read POST's bodies
Router.use(require('body-parser').json());


/************************* Products *******************/

// GET /categories/smartphones/products -> an object with all smartphones
Router.get('/:category/products', function(req, res) {
  Item.find({category: req.params.category}, '-_id -__v' ,function(err, data) {
     if(err) res.sendStatus(500);
     else res.json(data);
  });
});

// GET /categories/smartphones/products/iphone -> an object with a smartphone 
Router.get('/:category/products/:product', function(req, res) {
  Item.find(
  	{
      title: req.params.product,
      category: req.params.category 
   	},
    '-_id -__v', 
   	function(err, data) {
      if(err) res.sendStatus(500);
      else res.json(data);
    }
  );
});


// POST /categories/smartphones/products -> add a new product into a category
Router.post('/:category/products', function(req, res) {
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