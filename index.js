const mongoose = require("mongoose")
const express = require("express");
const port = process.env.port || 3000;
const app = express();
const fact = require("./models/fact");
const rtr = require("./Routers/Rout");
app.use(express.json());
app.use(rtr);
app.listen(port, ()=>{
    console.log("Listening to port number - "+ port);
});