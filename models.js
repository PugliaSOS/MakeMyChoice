var mongoose = require('mongoose'); 

var itemSchema = new mongoose.Schema(
	{
		title: String,
		category: [String],
		features: mongoose.Schema.Types.Mixed
	}
);

var Item = mongoose.model('Item', itemSchema);

module.exports.itemSchema = itemSchema;
module.exports.Item = Item;
