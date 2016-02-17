var mongoose = require('mongoose'); 

var itemSchema = new mongoose.Schema({
	title: String,
	category: [String],
	// attributes added dinamically
	feeds : [mongoose.Schema.Types.Mixed] // array manage dinamically added attributes
}, {strict: false});


var Item = mongoose.model('Item', itemSchema);

module.exports.itemSchema = itemSchema;
module.exports.Item = Item;
