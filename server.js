var http = require('http');
var fs = require('fs');
require('handlebars');

function onRequest(request, response){
  if (request.method == 'GET' && request.url == '/') {
    response.writeHeader(200, {"Content-Type": "text/html"});
    fs.createReadStream('./index.html').pipe(response);
  } else if (request.method == 'GET' && request.url == '/maps.js') {
      response.writeHeader(200, {"Content-Type": "text/javascript"});
      fs.createReadStream('./maps.js').pipe(response);
  } else if (request.method == 'GET' && request.url == 'img/fav.png') {
      response.writeHeader(200, {"Content-Type": "image/png"});
      fs.write('img/fav.png').pipe(response);
  } else {
    send404Response(response);
  }
}

function send404Response(response){
  response.writeHeader(404, {"Content-Type": "text/plain"});
  response.write('Error 404 - Page not found');
  response.end()
}

http.createServer(onRequest).listen(8888);
console.log('Server is running ...')
