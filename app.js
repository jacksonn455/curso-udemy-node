var app = require('./config/server');

app.get('/', function(req,res){
    res.render('home/index');  // Pagina html criada com ejs
});

app.get('/formulario', function(req,res){
    res.render("admin/form_add_noticia") ;
});

app.get('/noticias', function(req,res){
    res.render('noticias/noticias');
});

app.get('/beleza', function(req,res){
    res.render('<html><body> Noticias de Beleza </bodt></html>') // com express e sem ejs
});

// Recuperar msg utilizando (require)
// ./ serve para dizer que esta no mesmo nivel da aplicação
var msg = require('./mod_teste')();


// Criação do servidor
app.listen(3000, function(){
    console.log("Server on");
//  console.log(msg);
});