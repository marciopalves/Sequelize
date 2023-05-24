const Sequelize = require('sequelize');
const db = require('./db');


const cliente = db.define('cliente', {

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }

  //Criar tabela  
  //cliente.sync();    

  //Verifica se ha alguma diferença entre o Model e a tabela 
  //cliente.sync({ alter: true});


});


module.exports = cliente;