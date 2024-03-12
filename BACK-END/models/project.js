/*
    MODULO QUE IMPLEMENTA LAS ENTIDADES O MODELOS:
    Se realiza mediante MONGOOSE: elegant mongodb object modeling for node.js
*/

'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    link: String,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema);