var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Track = require('./models/track');
var Album = require('./models/album');
mongoose.connect('mongodb://localhost/pitchfork_api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/albums', require('./controllers/album'));
app.use('/api/tracks', require('./controllers/track'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(3000);