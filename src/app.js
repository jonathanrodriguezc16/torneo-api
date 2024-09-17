const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Importar rutas
const equiposRoutes = require('./routes/equipos');
const partidosRoutes = require('./routes/partidos');
const jugadoresRoutes = require('./routes/jugadores');
app.use('/api/equipos', equiposRoutes);
app.use('/api/partidos', partidosRoutes);
app.use('/api/jugadores', jugadoresRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
