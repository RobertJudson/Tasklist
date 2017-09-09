const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    descricao: {type: String, required: true},
    done: {type: Boolean, require: true, default: false},
    date: {type: Date, default: ''},
    prioridade: {type: String, enum: ['Nula','Baixa','Média','Alta'], default: 'Nula', require: true},
    createdAt: {type: Date, default: Date.now},
})

module.exports = restful.model('Todo', todoSchema)
