var server = require('http'); //http es un modulo
//si quieres referenciar un modulo propio (script)
//debes agregarlo -->  requiere('./http.js');

server.createServer(engine).listen(1337); 

function engine(request, response){
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end('{message:Hey there!!, from the server}', 'json');
}