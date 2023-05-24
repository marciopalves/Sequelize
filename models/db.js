const Sequelize = require('sequelize');

const conn = new Sequelize('curso_node', 'root', '', {
    host:'localhost',
    dialect:'mysql'
});


conn.authenticate()
.then( function(){
    console.log("Conexão realizada com sucesso!");
}).catch( function(){
    console.error("Erro ao realizr conexão com o banco de dados!");
})


module.exports = conn;