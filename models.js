var mongoose = require('mongoose'); 

//defines a schema which describe products pattern
var itemSchema = new mongoose.Schema(
	{
		title: String,
		categories: [String],
		features: mongoose.Schema.Types.Mixed
	}
);
//compiles schema
var Item = mongoose.model('Item', itemSchema);

module.exports.Item = Item;
