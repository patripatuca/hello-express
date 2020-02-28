const Sequelize=require('sequelize');
const sequelize=require('./db');
//definimos el usuario 
const Usuario = sequelize.define('usuario', {
  nombre:Sequelize.STRING(50),
  apellidos:Sequelize.STRING(50),
  email:Sequelize.STRING(50),
  password:Sequelize.STRING(50)
  
});
module.exports=Usuario;