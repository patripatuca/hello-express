const Sequelize=require('sequelize');
const sequelize=require('./db');
//definimos el usuario 
const Usuario = sequelize.define('usuario', {
  nombre:Sequelize.STRING(50),
  apellidos:Sequelize.STRING(80),
  email:{type:Sequelize.STRING(100),allowNull:false,unique:true},
  password:Sequelize.STRING(50)
  
});
module.exports=Usuario;