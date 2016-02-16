var mongoose = require('mongoose'); 

var categories = mongoose.Schema({
	name: {
		name: String
	},
	contents: [{
		// attributes of categories
	}]
})

module.exports.Category  = mongoose.model('Categories', categories);