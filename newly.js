const express = require("express");

const PORT = 4423;

const layer = express();

const holding = require("../olaexpress/routefile")
layer.use('/', holding)


layer.listen(PORT, ()=>{
    console.log(`my server port is opened at port:${PORT}`)
})