const mongoose = require('mongoose');

//const url = 'mongodb://localhost:27017/todo'
const url = 'mongodb+srv://admin:admin@cluster0.378rk.mongodb.net/todo?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser:true});

//exportar o que foi criado
module.exports=mongoose;