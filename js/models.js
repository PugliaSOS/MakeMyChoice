var mongoose = require('mongoose'); 

module.exports.categorySchema = new mongoose.Schema({
	title: String 
});

module.exports.Category  = mongoose.model('Categories', categorySchema);

module.exports.itemSchema = new mongoose.Schema({
	title: String,
	category: [categorySchema]
	// other attributes added dinamically
});

module.exports.Item = mongoose.model('Items', itemSchema);
