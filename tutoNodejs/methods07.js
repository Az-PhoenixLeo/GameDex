//module.exports = exports = {};

var methods = module.exports = {};

//a = {prop1: true};
//b = a
//b.prop1 = false
//console.log(a.prop1) --> false


methods.sumNumbers = function(a,b){
	output = a+b;
	return output;
}

methods.circleArea = function(radius){
	output = 2 * Math.PI * radius;
	return output;
}

methods.areaRec = function(a,b){
	output = a*b;
	return output;
}

module.exports.data = methods
