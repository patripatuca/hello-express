const Producto=require('./products');
const Usuario=require('./users.js');
const sequelize=require('./db');


//finalmente conectamos con la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync();//crea las tablas si no existen
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports={
    Producto,
    Usuario
    //usuario,
    //carrito
  }