// controllers/partidoController.js
const Partido = require('../models/Partido');
const Equipo = require('../models/Equipo');

// Listar todos los partidos
exports.getPartidos = async (req, res) => {
  try {
    const partidos = await Partido.find().populate('equipoA equipoB');
    res.json(partidos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un partido específico
exports.getPartidoById = async (req, res) => {
  try {
    const partido = await Partido.findById(req.params.id).populate('equipoA equipoB');
    if (!partido) return res.status(404).json({ message: 'Partido no encontrado' });
    res.json(partido);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo partido
exports.createPartido = async (req, res) => {
  const { equipoA, equipoB, fecha } = req.body;

  try {
    // Verificar que los equipos existen
    const equipoAExists = await Equipo.findById(equipoA);
    const equipoBExists = await Equipo.findById(equipoB);

    if (!equipoAExists || !equipoBExists) return res.status(400).json({ message: 'Uno o ambos equipos no válidos' });

    const nuevoPartido = new Partido({ equipoA, equipoB, fecha });
    const partido = await nuevoPartido.save();
    res.status(201).json(partido);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un partido
exports.updatePartido = async (req, res) => {
  const { equipoA, equipoB, fecha } = req.body;

  try {
    // Verificar que los equipos existen si se están actualizando
    if (equipoA) {
      const equipoAExists = await Equipo.findById(equipoA);
      if (!equipoAExists) return res.status(400).json({ message: 'Equipo A no válido' });
    }

    if (equipoB) {
      const equipoBExists = await Equipo.findById(equipoB);
      if (!equipoBExists) return res.status(400).json({ message: 'Equipo B no válido' });
    }

    const partido = await Partido.findByIdAndUpdate(req.params.id, { equipoA, equipoB, fecha }, { new: true }).populate('equipoA equipoB');
    if (!partido) return res.status(404).json({ message: 'Partido no encontrado' });
    res.json(partido);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un partido
exports.deletePartido = async (req, res) => {
  try {
    const partido = await Partido.findByIdAndDelete(req.params.id);
    if (!partido) return res.status(404).json({ message: 'Partido no encontrado' });
    res.json({ message: 'Partido eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
