
//var application_root = __dirname;
var express = require('express');
var vhost = require('vhost');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demonoor');
function createVirtualHost(domainName, dirPath) {
    return vhost(domainName, express.static(dirPath));
}
var app = express();
var noorHost = createVirtualHost("www.noor.com", "public");
var noor1Host = createVirtualHost("www.noor1.com", "public1");
var adminHost = createVirtualHost(https://multidomainapp.herokuapp.com", "admin");
var ablogHost = createVirtualHost("www.blog.com", "blog");
app.use(noor1Host);
app.use(noorHost);	
app.use(adminHost);
app.use(ablogHost);
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json()); 
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); 
app.use(methodOverride('X-HTTP-Method-Override'));
require('./app/routes.js')(app);




var port = 3000;
app.listen(port, function() {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});
