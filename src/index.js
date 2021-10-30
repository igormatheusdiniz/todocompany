//primeiro passo: importar em constante o express
const express = require('express');
//segundo passo: inicializar o server
const server = express();

const cors = require('cors');

const TaskRoutes = require('./routes/TaskRoutes');

//identificar que o servidor está se comunicando através de formato JSON
server.use(express.json());
server.use(cors());

//comando use serve pra inserir no servidor

//realizar a injecao da rota
server.use('/task', TaskRoutes);

//terceiro passo: Colocar o servidor pra escutar uma porta e executar uma arrow function
server.listen(3333, () => { 
    console.log('SERVER ONLINE');
});

//quarto passo: Criar uma rota basica de GET para receber uma mensagem
server.get('/teste', (req,res) => {
    res.send('A ROTA FOI CRIADA CORRETAMENTE EM TEMPO REAL ');
});


