// npm install express --save (framework de acesso web)
// Requisição com o modulo baixado do expre
// Serve para organizar as rotas
// npm install consign@0.1.6 --save (carregamento automático de scripts(requires))
var consign = require('consign');

var express = require('express');
var app = express();
// pesquisar as views
app.set('views', './app/views');

// npm install ejs --save
app.set('view engine', 'ejs');

// adiciona todos os requires no local definido 
consign().include('app/routes')
.then('config/dbConnection.js')
.into(app);

// estruturado a ser um modulo para a aplicação
module.exports = app; 