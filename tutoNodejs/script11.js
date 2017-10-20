var fs = require('fs');

console.log('Execute before file writting');
/*de igual manera haremos la escritura SINCRONIZADA
var data = fs.writeFile('./files/file3', 'Quiero leche con chocolate' ,'utf8', function(error){
	if(error) throw error;
	console.log('escribiendo archivo...');
});
*/
var data = fs.writeFileSync('./files/file', 'quiero leche con chocolate', 'utf8');
console.log('file written');
console.log('Execute after file writting...');
