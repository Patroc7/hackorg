const express = require('express')

require("dotenv").config();
const PORT = process.env.PORT
const app = express();

app.get('/login', (req, res)=>{
    return res
    .status(200)
    .json({msg: "You are on login",})
})

app.get('/register', (req, res)=>{
    return res
    .status(200)
    .json({msg: "You are on register",})
})

app.listen(PORT, ()=>{
    console.log("Backend running on ", PORT)
})
