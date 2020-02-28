const Sequelize=require('sequelize');
const sequelize=require('./db');

//definimos el pedido para el producto
const Pedido = sequelize.define('pedido', {
  estado:Sequelize.ENUM('PDTE_PAGO','PAGADO','CANCELADO','EN_TRANSITO','COMPLETO')
});


module.exports=Pedido;