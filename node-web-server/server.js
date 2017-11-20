const express = require('express');

var app = express();

app.get('/', (req, res) =>{
	res.send('hello world');
});

app.get('/about', (req, res) =>{
	res.send('<h1>About this page</h1>');
});

app.get('/bad', (req, res) =>{

	res.send({
		message: 'Bad request'
	});
});

app.listen(3000);