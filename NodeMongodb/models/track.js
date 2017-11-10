
var mongoose = require('mongoose');

var trackSchema = mongoose.Schema({
	ts: String,
	eventType: String,
	datat: String,
	dataArtist:String,
	dataAlbum:String,
	dataTrack:String,
	dataTitle:String,
	dataUri: String,
	dataUser:String
});

module.exports = mongoose.model('Canciones', trackSchema);
