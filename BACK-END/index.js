'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(() => {
        console.log("Conectado correctamente a base de datos Portfolio en MongoDB")

        // Creacion del SERVIDOR
        app.listen(port, () =>{
            console.log("Servidor corriendo correctamente en la url: localhost:"+ port)
        });

    })
    .catch((error) => {
        console.error(error);
    });
