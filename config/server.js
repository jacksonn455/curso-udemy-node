// npm install express --save (framework de acesso web)
// Requisição com o modulo baixado do expre
// Serve para organizar as rotas
var express = require('express');
var app = express();

// npm install ejs --save
app.set('view engine', 'ejs');

// estruturado a ser um modulo para a aplicação
module.exports = app;