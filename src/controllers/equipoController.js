// controllers/equipoController.js
const Equipo = require('../models/Equipo');

// Listar todos los equipos
exports.getEquipos = async (req, res) => {
  try {
    const equipos = await Equipo.find();
    res.json(equipos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un equipo específico
exports.getEquipoById = async (req, res) => {
  try {
    const equipo = await Equipo.findById(req.params.id);
    if (!equipo) return res.status(404).json({ message: 'Equipo no encontrado' });
    res.json(equipo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo equipo
exports.createEquipo = async (req, res) => {
  const nuevoEquipo = new Equipo({
    nombre: req.body.nombre,
    pais: req.body.pais
  });

  try {
    const equipo = await nuevoEquipo.save();
    res.status(201).json(equipo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un equipo
exports.updateEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!equipo) return res.status(404).json({ message: 'Equipo no encontrado' });
    res.json(equipo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un equipo
exports.deleteEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findByIdAndDelete(req.params.id);
    if (!equipo) return res.status(404).json({ message: 'Equipo no encontrado' });
    res.json({ message: 'Equipo eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
