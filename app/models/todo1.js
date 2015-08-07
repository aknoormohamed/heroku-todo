var mongoose = require('mongoose');

var collectionName1 = 'noortodo1'


module.exports = mongoose.model('Todo1', {
    text: {
        type: String,
        default: ''
    },
    cat: {
        type: String,
        default: ''
    },
    des: {
        type: String,
        default: ''
    },
    by: {
        type: String,
        default: ''
    },
    tags: {
        type: Array,
        default: ''
    },
    
    comments: {
        type: Object  ,
        default: ''
    }

},
 collectionName1
	);