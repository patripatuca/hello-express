const Sequelize=require('sequelize');
const sequelize=require('./db');

//definimos el pedido para el producto
const Pedido = sequelize.define('pedido', {
  estado:Sequelize.ENUM('PDTE_PAGO','PAGADO','CANCELADO','EN_TRANSITO','COMPLETO'),
  direccionEntrega:Sequelize.STRING(200)
});


module.exports=Pedido;