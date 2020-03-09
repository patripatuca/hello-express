const Producto=require('./products');
const Usuario=require('./users.js');
const Carrito=require('./carrito.js');
const Pedido=require('./Pedido.js');
const ProductoCarrito=require('./producto-carrito.js');
const ProductoPedido=require('./productopedido');
const sequelize=require('./db');

Usuario.hasOne(Carrito);
Carrito.belongsTo(Usuario);
Usuario.hasMany(Pedido);
Pedido.belongsTo(Usuario);
Producto.belongsToMany(Carrito,{through:ProductoCarrito});
Carrito.belongsToMany(Producto,{through:ProductoCarrito});
Pedido.belongsToMany(Producto,{through:ProductoPedido});
Producto.belongsToMany(Pedido,{through:ProductoPedido});


//finalmente conectamos con la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync({alter:true});//crea las tablas si no existen
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports={
    sequelize,
    Producto,
    Usuario,
    Carrito,
    Pedido,
    ProductoCarrito
  }