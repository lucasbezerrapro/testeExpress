// index.js
const express = require('express');
const app = express();
const router = require('./passaros.js');

app.use('/', router);

module.exports = app; // Exporta o aplicativo Express

// Agora você não precisa mais da parte que escuta a porta:
// const port = 3000;
// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`);
// });
