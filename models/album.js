var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
	year: Number,
	artist: String,
	albumTitle: String,
	trackTitle: String,
	rank: Number,
	image: String,
	comment: String
});

module.exports = mongoose.model('Album', AlbumSchema);
