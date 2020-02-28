const Sequelize=require('sequelize');
const sequelize=require('./db');
//definimos el usuario 
const Usuario = sequelize.define('usuario', {
  nombre:{type:Sequelize.STRING(50),allowNull:false},
  apellidos:{type:Sequelize.STRING(80),allowNull:false},
  email:{type:Sequelize.STRING(100),allowNull:false,unique:true},
  password:{type:Sequelize.STRING(50),allowNull:false} 
});
module.exports=Usuario;