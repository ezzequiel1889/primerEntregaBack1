const express = require("express");
const router = express.Router();

const users = [1,2,3];

router.get("/user", (req,res) =>{
    res.send("users");
})