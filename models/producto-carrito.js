
const Sequelize=require('sequelize');
const sequelize=require('./db');

//definimos el modelo  producto-carrito

const ProductoCarrito = sequelize.define('producto-carrito', {
 
cantidad:{type:Sequelize.INTEGER,
    allowNull:false,
defaultValue:1}

});module.exports=ProductoCarrito;
  