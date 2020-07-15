// Requisição com o proprio node sem nenhum modulo instalado

var http = require('http');

var server = http.createServer( function(req, res){

    var categoria = req.url;  // criando rotas

    if(categoria == '/tecnologia'){ // controle de rotas
        res.end("<html><body> Noticias de Tecnologia </bodt></html>")
    }

    else if(categoria == '/moda'){
        res.end("<html><body> Noticias de Moda </bodt></html>")
    }

    else if(categoria == '/beleza'){
        res.end("<html><body> Noticias de Beleza </bodt></html>")
    }
    
    else{
       res.end("<html><body> Portal de notícias </bodt></html>")   
    }

  

});

server.listen(3000); // escutando na porta localhost 3000