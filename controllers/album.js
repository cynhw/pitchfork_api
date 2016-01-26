var express = require('express');
var Album = require('../models/album');
var router = express.Router();

router.route('/')
	.get(function(req, res) {
			Album.find(function(err, albums) {
				if (err) return res.status(500).send(err);
				res.send(albums);
			});
		})
	.post(function(req, res) {
		Album.create(req.body, function(err, album) {
			if(err) return res.status(500).send(err);
			res.send(album);
		});
	});

router.route('/:year')
	.get(function(req, res) {
		Album.find({year: req.params.year}, function(err, albums) {
			if(err) return res.status(500).send(err);
			res.send(albums);
		});
	});

router.route('/:id')
	.get(function(req, res) {
		Album.findById(req.params.id, function(err, album) {
			if (err) return res.status(500).send(err);
			res.send(album);
		});
	})
	.put(function(req, res) {
		Album.findByIdAndUpdate(req.params.id, {$set: {comment: req.body.comment}} , function(err) {
			if (err) return res.status(500).send(err);
			res.send({'message': 'success'});
		});
	})


module.exports = router;