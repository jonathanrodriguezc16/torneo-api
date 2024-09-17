
const express = require('express');
const router = express.Router();
const jugadorController = require('../controllers/jugadorController');
const { body, validationResult } = require('express-validator');

router.get('/', jugadorController.getJugadores);
router.get('/:id', jugadorController.getJugadorById);
router.post('/',
  body('nombre').isString().notEmpty(),
  body('equipoId').isMongoId(),
  jugadorController.createJugador
);
router.put('/:id',
  body('nombre').isString().optional(),
  body('equipoId').isMongoId().optional(),
  jugadorController.updateJugador
);
router.delete('/:id', jugadorController.deleteJugador);

module.exports = router;
