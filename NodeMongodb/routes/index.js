var express = require('express');
var router = express.Router();
var multer  = require('multer');

//Ruta del controlador
var trackController = require('../controllers/track_controller');


//pagina principal
router.get('/', function(req, res) {
  res.render('index');
});

//Ruta para el formulario de subir una nueva cancion
router.get('/subir', function(req, res) {
  res.render('new');
});


//Ruta para listar todas las canciones subidas a la base de datos
router.get('/listar', trackController.listar);

//ruta para subir una cancion en base de datos
router.post('/subirCancion', trackController.subir);


module.exports = router;
