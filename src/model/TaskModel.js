//importando a configuração que foi exportada para acesso a base de dados
const mongoose = require('../config/database');

//definindo de que se trata de um Schema
const Schema = mongoose.Schema;

//Criacao do Schema
const TaskSchema = new Schema({

    macaddress: {type: String, required: true},
    tittle: {type: String, required: true},
    type: {type: Number, required: true},
    description: {type: String, required: true},
    when: {type:Date, required: true},
    done: {type: Boolean, default: false},
    created: {type: Date, default:Date.now()}

});

//exportar o model
module.exports = mongoose.model('Task', TaskSchema);