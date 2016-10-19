var express = require('express');
var ctrl = express.Router();

var users = [
	{
	username: 'testy',
	password: '12345'
	},
	{
	username:'tina',
	password:'2345'
	},
	{
	username:'reina',
	password:'527'
	}

];


ctrl.get('/', function(req, res, next){
	//request
	//response
	//callback
	res.json(users);
	// res.render('view', {});


});

module.exports = ctrl;

ctrl.get('/1', function(req, res, next){
	res.json(data[0]);
});

ctrl.get('/2', function(req, res, next){
	res.json(data[1]);
});

ctrl.get('/3', function(req, res, next){
	res.json(data[2]);
});




