//our module requires express + express.Router()

var express = require('express');
var ctrl = express.Router();


ctrl.get('/', function(req, res, next){
	res.render('index', {
		message: 'it is russels birthday'
	});
});

ctrl.get('/home', function(req, res, next){
	res.render('hello', {
		name: 'homer sipson',
		adjective: 'funny',
		framework: 'Express.js'

	});
});


//export controller
module.exports= ctrl;

