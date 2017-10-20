//eventos y emisor de eventos

var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', function(arg1, arg2){
	//console.log('Event fired');
	console.log(arg1 + arg2);
});

setTimeout(function(){
	eventEmitter.emit('myCustomEvent', 'String1 ', 'and string 2');

},2000)