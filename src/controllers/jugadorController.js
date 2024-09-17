const Jugador = require('../models/Jugador');
const Equipo = require('../models/Equipo');

// Listar todos los jugadores
exports.getJugadores = async (req, res) => {
  try {
    const jugadores = await Jugador.find().populate('equipoId');
    res.json(jugadores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un jugador específico
exports.getJugadorById = async (req, res) => {
  try {
    const jugador = await Jugador.findById(req.params.id).populate('equipoId');
    if (!jugador) return res.status(404).json({ message: 'Jugador no encontrado' });
    res.json(jugador);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo jugador
exports.createJugador = async (req, res) => {
  const { nombre, equipoId } = req.body;

  try {
    // Verificar que el equipo existe
    const equipo = await Equipo.findById(equipoId);
    if (!equipo) return res.status(400).json({ message: 'Equipo no válido' });

    const nuevoJugador = new Jugador({ nombre, equipoId });
    const jugador = await nuevoJugador.save();
    res.status(201).json(jugador);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un jugador
exports.updateJugador = async (req, res) => {
  const { nombre, equipoId } = req.body;

  try {
    // Verificar que el equipo existe si se está actualizando
    if (equipoId) {
      const equipo = await Equipo.findById(equipoId);
      if (!equipo) return res.status(400).json({ message: 'Equipo no válido' });
    }

    const jugador = await Jugador.findByIdAndUpdate(req.params.id, { nombre, equipoId }, { new: true }).populate('equipoId');
    if (!jugador) return res.status(404).json({ message: 'Jugador no encontrado' });
    res.json(jugador);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un jugador
exports.deleteJugador = async (req, res) => {
  try {
    const jugador = await Jugador.findByIdAndDelete(req.params.id);
    if (!jugador) return res.status(404).json({ message: 'Jugador no encontrado' });
    res.json({ message: 'Jugador eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
