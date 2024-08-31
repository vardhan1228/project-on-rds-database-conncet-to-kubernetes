// frontend/app.js
const express = require('express');
const axios = require('axios');
const app = express();

const backendServiceUrl = process.env.BACKEND_SERVICE_URL || 'http://backend';

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${backendServiceUrl}/api/db-version`);
        res.send(`<h1>Database Version: ${response.data.db_version}</h1>`);
    } catch (error) {
        res.send(`<h1>Failed to connect to backend: ${error.message}</h1>`);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Frontend server is running on port ${port}`);
});
