const mongoose = require('mongoose');

const jugadorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  equipoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipo', required: true }
});

module.exports = mongoose.model('Jugador', jugadorSchema);
