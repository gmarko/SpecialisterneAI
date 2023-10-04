const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001; // Elige el puerto que desees para el servidor intermedio

app.use(express.json());

app.get('/api/endpoint', async (req, res) => {
    try {
        const openaiResponse = await axios.get('https://api.openai.com/v1/endpoint', {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        res.send(openaiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

app.listen(port, () => {
    console.log(`Servidor intermedio escuchando en el puerto ${port}`);
});