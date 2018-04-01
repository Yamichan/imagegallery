//Lets require/import the HTTP module
var http = require('http');
var url = require("url");
var fs = require('fs');
// Lets define a port we want to listen to
// const PORT=8088;

// We need a function which handles requests and send response
function handleRequest(request, response){
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS");
	response.setHeader("Access-Control-Allow-Headers","Content-Type"); 
	
// response.end("Hello World\n");
	
	if (request.method == 'POST') {
		var body = '';
		request.on('data', function (data) {
		});
			body += data;
		request.on('end',function() {

			var POST =  qs.parse(body);
			// console.log(POST);
			response.writeHead( 200 );
			response.write( JSON.stringify( POST ) );
			response.end();
		});
	}
	else if(request.method == 'GET') {
		var url_parts = url.parse(request.url,true);
		response.writeHead( 200 );
		// response.write( JSON.stringify( url_parts.query ) );
		var action = url_parts.query.action;
		if(action == 'info'){
			response.write( JSON.stringify('{"I am Akatsuki"}'));
		}

		response.end();
	}
}

// Create a server
fs.readFile('./public/ImagesGallery/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
