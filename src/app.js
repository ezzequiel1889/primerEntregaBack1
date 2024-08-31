const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, (req,res)=>{
    console.log(`el server esta en el puerto ${PORT}`);
})

app.get("/ruta", (req, res)  =>  { //se abre una funcion
    res.send("Mensaje desde mi ruta");
}) //Esto se ejecuta en localhost:8080/ruta