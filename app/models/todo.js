var mongoose = require('mongoose');
var collectionName = 'noortodo'


module.exports = mongoose.model('Todo', {
	text : {type : String, default: ''}}, collectionName
	);
