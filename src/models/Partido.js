const mongoose = require('mongoose');

const partidoSchema = new mongoose.Schema({
  equipoA: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipo', required: true },
  equipoB: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipo', required: true },
  fecha: { type: Date, required: true }
});

module.exports = mongoose.model('Partido', partidoSchema);
