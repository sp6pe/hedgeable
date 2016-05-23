 'use strict'

var express = require('express');
var app = express();
var path = require('path');
module.exports = app;

//expres set up
var rootPath = path.join(__dirname, '../');
var indexPath = path.join(rootPath, './browser/index.html');
var browserPath = path.join(rootPath, './browser');
var publicPath = path.join(rootPath, './public');
var npmPath = path.join(rootPath, './node_modules');

//statically serving files
app.use(express.static(publicPath));
app.use(express.static(browserPath));
app.use(express.static(npmPath));


// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use('/api', require('./routes'));


/*
 This middleware will catch any URLs resembling a file extension
 for example: .js, .html, .css
 This allows for proper 404s instead of the wildcard '/*' catching
 URLs that bypass express.static because the given file does not exist.
 */
app.use(function (req, res, next) {

    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }

});



//main view of app 
app.get('/*', function (req, res) {
	console.log(req.sessionID);
    res.sendFile(app.get('indexHTMLPath'));
});
//app running on port 3000
app.listen(3000, function () {

  console.log('Example app listening on port 3000!');
});


// Error catching endware
app.use(function(err, req, res, next) {
    console.error(err)
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});