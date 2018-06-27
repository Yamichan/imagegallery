var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(path.resolve(__dirname + '/public/ImagesGallery')));
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '/public/ImagesGallery/index.html'));
});

app.get('/info', function (req, res) {
    res.status( 200 ).send( { 'Hello I am Akatsuki!' } );
});

app.listen(8080, function () {
    console.log('This express angular app is listening on port:' + 8888);
});
module.exports = app;
