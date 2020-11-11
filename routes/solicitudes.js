/*
const {
    crearSolicitud,
    obtenerSolicitud,
    modificarSolicitud,
    eliminarSolicitud
} = require('../controllers/solicitudes')

router.get('/solicitudes', obtenerSolicitud)
router.post('/solicitudes', crearSolicitud)
router.put('/solicitudes/:id', modificarSolicitud)
router.delete('/solicitudes/:id', eliminarSolicitud)

module.exports = router;
 */


const router = require('express').Router();
const {
    crearSolicitud,
    obtenerSolicitud,
    modificarSolicitud,
    eliminarSolicitud
} = require('../controllers/solicitudes')
var auth = require('./auth');

router.get('/', auth.requerido, obtenerSolicitud)
router.get('/:id', auth.requerido, obtenerSolicitud)
router.post('/', auth.requerido, crearSolicitud)
router.put('/:id', auth.requerido, modificarSolicitud)
router.delete('/:id', auth.requerido, eliminarSolicitud)

module.exports = router;