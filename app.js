// Arquivo app.js guarda apenas elementos estruturais ou seja as regras

var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormulario = require('./app/routes/formulario')(app);

// Recuperar msg utilizando (require)
// ./ serve para dizer que esta no mesmo nivel da aplicação
var msg = require('./mod_teste')();


// Criação do servidor
app.listen(3000, function(){
    console.log("Server on");
//  console.log(msg);
});