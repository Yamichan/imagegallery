var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public/ImagesGallery'));
app.get( '/', ( req: any, res: any ) => {
    res.sendFile( path.resolve( __dirname, '/public/ImagesGallery/index.html' ) );
} );
export = app;
