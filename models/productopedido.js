const Sequelize=require('sequelize');
const sequelize=require('./db');

//definimos el modelo  producto-carrito

const ProductoPedido = sequelize.define('productopedido', {
 
cantidad:{type:Sequelize.INTEGER,
    allowNull:false,
defaultValue:1}

});module.exports=ProductoPedido;
  