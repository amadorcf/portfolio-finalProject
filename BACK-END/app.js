/* MODULO QUE IMPLEMENTA LA CONFIGURACION DE EXPRESS: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
*/
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de RUTAS
var project_routes = require('./routes/project')

//CORS
// Aqui explicacion de como condigurar el acceso https://victorroblesweb.es/2018/01/31/configurar-acceso-cors-en-nodejs/
// Configurar cabeceras y cors. Esto hace un middleware antes de cualquier ejecucion
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//MIDDLEWARES: metodo que se ejecuta antes que la capa del controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //Esto convierte todo lo que llegue a la url a formato JSON

app.use('/api',project_routes);



// RUTAS
    /*
    app.get('/',(req, res) => {
        res.status(200).send(
        "<h1>HOME</h1>"
        );
    });

    app.get('/test',(req, res) => {
        res.status(200).send({
            message: "Test superado"
        });
    });

    app.post('/test/:id', (req, res) => {
        console.log("\n"+req.body.name);
        console.log(req.params.id);
        console.log(req.query.web);

        res.status(200).send({
            message: "Probando metodo POST"
        });
    });
    */

// EXPORTAR
module.exports = app;
