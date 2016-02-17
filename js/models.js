var mongoose = require('mongoose'); 

module.exports.categorySchema = new mongoose.Schema({
	title: String 
});

module.exports.Category  = mongoose.model('Categories', categorySchema);

module.exports.questionarySchema = new mongoose.Schema({
	title: String,
	category: [categorySchema]
	// other attributes added dinamically
});

module.exports.Questionary = mongoose.model('Questionaries', questionarySchema);