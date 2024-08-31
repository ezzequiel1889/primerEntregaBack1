const express = require("express");
const app = express();
const PORT = 8080;

/* enlazo app con productsRouter */
const productsRouter = require("./routes/products.router.js");

// /* le doy la ruta a products */
// app.use("/", productsRouter);


app.get("/ruta", (req, res)  =>  { //se abre una funcion
    res.send("Mensaje desde mi ruta");
}) //Esto se ejecuta en localhost:8080/ruta


app.listen(PORT, (req,res)=>{
    console.log(`el server esta en el puerto ${PORT}`);
})