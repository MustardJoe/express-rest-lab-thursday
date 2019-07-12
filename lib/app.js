const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemsorstuff');

app.use(express.json());

app.use('/api/v1/videogames', itemRoutes);

module.exports = app;
