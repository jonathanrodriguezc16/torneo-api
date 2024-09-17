
const express = require('express');
const router = express.Router();
const partidoController = require('../controllers/partidoController');
const { body, validationResult } = require('express-validator');

router.get('/', partidoController.getPartidos);
router.get('/:id', partidoController.getPartidoById);
router.post('/',
  body('equipoA').isMongoId(),
  body('equipoB').isMongoId(),
  body('fecha').isISO8601(),
  partidoController.createPartido
);
router.put('/:id',
  body('equipoA').isMongoId().optional(),
  body('equipoB').isMongoId().optional(),
  body('fecha').isISO8601().optional(),
  partidoController.updatePartido
);
router.delete('/:id', partidoController.deletePartido);

module.exports = router;
