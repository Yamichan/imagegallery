const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendfile('./public/ImagesGallery/index.html');
});
