const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log('Datos recibidos:', req.body);
    res.send('Datos recibidos correctamente');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});