var http = require('http'); //http es un modulo
//si quieres referenciar un modulo propio (script)
//debes agregarlo -->  requiere('./http.js');
var server = http.createServer(engine); //creamos el servidor

server.listen(1337, function(){
	//esta funcion se ejecuta cada vez q el 
	//servidor recive una peticion
	console.log('server was hit by a request');

});

//server.createServer(engine).listen(1337); 

function engine(request, response){
	//console.log(response);
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hey there!!, from the server. Request from page:' + request.url); 
	// request.url es la direccion de la pah¡gina actual
	
}