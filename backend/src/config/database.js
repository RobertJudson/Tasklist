const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://root:root@ds161860.mlab.com:61860/todo-list-prpi') // mongodb://localhost/todo
