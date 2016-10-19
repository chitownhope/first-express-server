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