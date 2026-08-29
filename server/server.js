// server/server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola Mundo desde Express');
});

// Ruta adicional de ejemplo
app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: 'Hola Mundo desde el backend' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Express ejecutándose en http://localhost:${PORT}`);
});