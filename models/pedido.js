const Sequelize=require('sequelize');
const sequelize=require('./db');

//definimos el pedido para el producto
const Pedido = sequelize.define('pedido', {
  estado:Sequelize.BOOLEAN 
});


module.exports=Usuario;