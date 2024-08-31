const express = require("express");
const router = express.Router();



router.get("/api/products", (req,res) =>{
    const usuario ={
        nombre: "eze",
        apeliido: "maidana"
    }
    res.send(usuario);
})