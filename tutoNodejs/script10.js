
//como leer archivos

var fs = require('fs');


console.log('Execute before file reading. ');
/* al ejecutar este codigo la lectura del archivo se realiza hasta el ulyimo
//si queremos el caso contrario tenemos que SINCRONIZARLA
//si NO se pone el encoding no podra leer el archivo
fs.readFile('./files/file', 'utf8', function(error, data){ 
	console.log(data);

});
*/

var data = fs.readFileSync('./files/file', 'utf8');
console.log(data);

console.log('Execute after file reading, probably');
