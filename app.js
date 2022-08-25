const express = require('express');

const app = express(); //Creamos una aplicación express
const port = 3000;

/**
 * Basic routing
 * @link https://expressjs.com/en/starter/basic-routing.html
 * @link https://expressjs.com/en/guide/writing-middleware.html
 */
app.get('/',(req,res)=>{
    res.send('Hello World');
});

//Lo que importa en realida es el puerto que se va a escuchar la aplicación. El callback es opcional
app.listen(port,()=>{
    console.log(`Escuchando por el puerto ${port}`);
});