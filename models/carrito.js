const Sequelize=require('sequelize');
const sequelize=require('./db');

//definimos el carrito para el producto
const Carrito = sequelize.define('carrito', {
  
});


module.exports=Carrito;