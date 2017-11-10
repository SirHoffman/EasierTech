//Modelo de la base de datos
var Canciones = require('./../models/track');
var http = require('http');
var request = require('request');

//Modulo para subir una cancion a la base de datos
exports.subir = function (req, res) {
console.log(req.route.path);
			var newTrack = new Canciones({
						ts: '2017-04-T00',
						eventType: 'songPlayed',
						datat: '2791',
						dataArtist:'radiohead',
						dataAlbum:'PabloHoney',
						dataTrack:'11',
						dataTitle:'Lurgee',
						dataUri: '/musica/cancion1.mp3',
						dataUser:'ArseLocal'
					});


					newTrack.save(function (err, newTrack) {
  					if (err)
 						 console.log('Error al guardar la canción');	
					});
res.render('subidoexito');


};

//Listar todas las canciones de la base de datos
exports.listar = function (req, res) {

Canciones.find(function(err,canciones){
		if (err){
			 return console.error(err);
		} else{
			console.log(canciones);


  			res.render('tracks/index', {tracks: canciones});
		}
	});
};




