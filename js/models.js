var mongoose = require('mongoose'); 

var categorySchema = new mongoose.Schema({
	title: String 
});

var Category = mongoose.model('Categories', categorySchema);

var itemSchema = new mongoose.Schema({
	title: String,
	category: [Category]
	// other attributes added dinamically
});

var Item = mongoose.model('Items', itemSchema);

module.exports.categorySchema = categorySchema;
module.exports.Category = Category;
module.exports.itemSchema = itemSchema;
module.exports.Item = Item;
