module.exports = function (app) {
    app.get('/beleza', function (req, res) {
        res.render('<html><body> Noticias de Beleza </bodt></html>') // com express e sem ejs
    });
};