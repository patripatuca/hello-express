var express = require('express');
var router = express.Router();
var products=require("../models/products.js")
var users =require('../models/users.js');
/* GET home page. */
router.get('/', function(req,res,next){
  const username=req.session.username;
  res.render('index',{title: 'to home Patri', username,products});
});

router.get('/products/:ref', function(req, res, next) {
  //obtengo la ref del producto a partir de la ruta//
  var ref=req.params.ref;
  //busco entre los productos el que coincide con la ref//
  const product=products.find(function(p){
    return p.ref==ref;
  });

  if(product){
    res.render('product',{product});
  }else{
    res.redirect("/error");
  }

  
   //pasamos los datos del producto a la palntilla 
  
});
var cesta = []; //provisional

 router.post("/comprar", function (req, res, next) {
   const ref = req.body.ref;

   // Busco entre los productos el que coincide con la referencia
   const product = products.find(function(p) { 
     return p.ref==ref; 
   });

   // Añadimos producto a la cesta
   cesta.push(product);
   // Redirigimos a página de productos
   res.redirect("/");
 });

 router.get("/login", function (req, res, next) {
   res.render("login");
 });


router.get("/login", function (req, res, next) {
  res.render("login");
});
//**

//procesamiento del formulario de login. Obtienelos datos del formulario en la
//peticion (req) y comprueba si hay algún usuario con ese nombre y contraseña. si no coincide
 //genera una cookie y dirige a la pág pricipal. Si no cooincide, vuelve acargar la pág de login
 //para mostrar un error.
//

router.post("/login",function(req,res,next){
  const username=req.body.username;
  const password=req.body.password;
  //const{username,password}=req.body;
  const user=users.find(function(u){
   //  if(u.username==username&& u.password==password){
    //    return true;
    // }else{
    //   return false;
    // }
    //}); es lo mismo que:
     return (u.username==username && u.password==password);
  });
  if (user){
    //todo:generar cookie
    req.session.username=username;
    res.redirect("/");
  }else{
    //Todo:inyectar mensaje de error a pantalla
    res.render("login");
  }

});


module.exports = router;
