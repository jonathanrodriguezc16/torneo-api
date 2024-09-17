const express = require('express');
const router = express.Router();
const equipoController = require('../controllers/equipoController');
const { body, validationResult } = require('express-validator');

router.get('/', equipoController.getEquipos);
router.get('/:id', equipoController.getEquipoById);
router.post('/',
  body('nombre').isString().notEmpty(),
  body('pais').isString().notEmpty(),
  equipoController.createEquipo
);
router.put('/:id',
  body('nombre').isString().optional(),
  body('pais').isString().optional(),
  equipoController.updateEquipo
);
router.delete('/:id', equipoController.deleteEquipo);

module.exports = router;
