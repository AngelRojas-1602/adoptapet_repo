/*const {
    crearMascota,
    obtenerMascotas,
    modificarMascota,
    eliminarMascota
} = require('../controllers/mascotas')

router.get('/mascotas', obtenerMascotas)
router.post('/mascotas', crearMascota)
router.put('/mascotas/:id', modificarMascota)
router.delete('/mascotas/:id', eliminarMascota)*/

const router = require('express').Router();
const {
    crearMascota,
    obtenerMascotas,
    modificarMascota,
    eliminarMascota
} = require('../controllers/mascotas')
var auth = require('./auth');

router.get('/', auth.opcional, obtenerMascotas)
router.get('/:id', auth.opcional, obtenerMascotas) // nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearMascota)
router.put('/:id', auth.requerido, modificarMascota)
router.delete('/:id', auth.requerido, eliminarMascota)

module.exports = router;