const express = require('express');
const app = express();
const router = require('./passaros.js');

app.use('/', router);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
