// npm install express --save (framework de acesso web)
// Requisição com o modulo baixado do expre
// Serve para organizar as rotas
// npm install consign@0.1.6 --save (carregamento automático de scripts(requires))
var consign = require('consign');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
// pesquisar as views
app.set('views', './app/views');

// serve como midleware formato JSON
app.use(bodyParser.urlencoded({extended: true}));

// npm install ejs --save
app.set('view engine', 'ejs');

// adiciona todos os requires no local definido 
consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app);

// estruturado a ser um modulo para a aplicação
module.exports = app; 