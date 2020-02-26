const Sequelize= require('sequelize')
//primero definimos sequelize con los parámetros de conexion
const sequelize = new Sequelize('hello-express', 'root', '', {
  host: 'localhost',
  dialect:'mariadb'
});
 
module.exports=sequelize;