var express = require('express');
var ctrl = express.Router();


/*data for our routes*/

var data = [
	{
		name: 'North Coast Music Fest',
		location: 'Union Park',
		notes: 'wu tang clan ain ntohing to mess w'
	},
	{
		name: 'Spring Awakening',
		location: 'soldier field',
		notes: 'minors asking to buy booze'
	},
	{
		name: 'Marshmello',
		location: 'concord',
		notes: 'black friday'
	},
	{
		name: 'tina',
		location: 'chicago',
		notes: 'student'
	},
	{
		name: 'reina',
		location: 'lane',
		notes: 'also a student'
	},

];

module.exports = ctrl;

//build our first api
ctrl.get('/', function(req, res, next){
	res.json(data);
})

ctrl.get('/1', function(req, res, next){
	res.json(data[0]);
});

ctrl.get('/2', function(req, res, next){
	res.json(data[1]);
});

ctrl.get('/3', function(req, res, next){
	res.json(data[2]);
});

ctrl.get('/4', function(req, res, next){
	res.json(data[3]);
});

ctrl.get('/5', function(req, res, next){
	res.json(data[4]);
});












