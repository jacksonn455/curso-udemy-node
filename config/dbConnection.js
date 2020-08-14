var mysql = require('mysql');

var connMySQL = function () {
    console.log("Conexão com o bd foi estabelecida");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    }); // fazendo conexao com o banco
}

module.exports = function () {
    console.log("O autoload carregou o modulo de conexao com o bando de dados");
    return connMySQL
}