var express = require('express');
var router = express.Router();
var users =require('../models/users.js');

const{Producto,Usuario,Carrito}=require('../models');

/* GET home page. */
router.get('/', function(req,res,next){
  const username=req.session.username;

  Producto.findAll().then(products=>{
    console.log(products);
    res.render('index',{title: 'to home Patri', username,products});
  })
 
});
//página con los detalles de  un producto según su referencia.
router.get('/products/:ref', function(req, res, next) {
  //obtengo la ref del producto a partir de la ruta//
  var ref=req.params.ref  ;

  Producto.findOne({
    where:{ref}
  })
  .then(product =>{
    if(product){
      res.render('product',{product});
    }else{
      res.redirect("/error");
    }
  })  
})

 router.post("/comprar", function (req, res, next) {
   const ref = req.body.ref;
   const usuarioId=req.session.usuarioId;
   if(usuarioId) {
 // Busco entre los productos el que coincide con la referencia
   Producto.findOne({where:{ref}})
   .then(producto=> {
      if(producto){
        //localizamos carrito y ponemos producto en carrito
        Carrito.findOrCreate({where:{usuarioId}, include:[Producto],defaults:{usuarioId}})
        .then(([carrito,created])=> {
          var productos=carrito.productos;
          //quiero buscar ese producto y ver si está en el carrito.Tenemos que recorrer el array .
          var p=productos.find(p=> p.ref==ref);
          if(p) {
            //artículo ya en carrito, incrementamos cantidad
            p.productocarrito.increment({cantidad:1})
            .then(()=>{
              res.redirect("/");
            });
          }else{
            
          
          carrito.addProducto(producto)
          .then(()=>{
            res.redirect("/");
          })
        }
        })  
      }else{
        //mostrar página de error
        res.render("error",{message:"no existe el producto solicitado"});
      }

   })
  }else{
    res.redirect("/login");
  }
 })

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
  const{email,password}=req.body;
  Usuario.findOne({where:{email,password}})
  .then(usuario=>{
    if (usuario){
      //todo:generar cookie
      req.session.usuarioId= usuario.id;
      res.redirect("/");
    }else{
      //Todo:inyectar mensaje de error a pantalla
      res.render("login");
    }
  })
  
});
  router.get("/registro",function(req,res,next){
    res.render("registro",{error:undefined ,datos:{} });
  });
  router.post("/registro",function(req,res,next){
    const datos=req.body;
    if(datos.nombre.length==0){
      res.render("registro",{datos,error:"Nombre no puede estar vacio"});
    }else 
      if(datos.apellidos.length==0){
      res.render("registro",{datos,error:"Apellidos no puede estar vacio"});
      }else
      
      if (datos.email.length==0){
       res.render("registro",{datos,error:"El email no debe de estar vacio "});
      }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(datos.email)){
        res.render("registro",{datos,error:"error no valido"});
      }else
      if(datos.password.length<6){
       res.render("registro",{datos,error:"El password ha de tener al menos 6 caracteres"});
      }else
      if(datos.password!=datos.repassword){
        res.render("registro",{datos,error:"El password no puede ser distinto de repassword"});
      }else{
     Usuario.create(datos) 
     .then(usuario=>{
       res.redirect("/login");
     });
    }
     
  }); 
  router.get("/carrito", function(req,res,next){
    res.render("carrito");
  }) 


module.exports = router;

