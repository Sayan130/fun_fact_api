const mongoose = require("mongoose")
const express = require("express");
const port = process.env.port || 3000;
const app = express();
const fact = require("./models/fact");

app.use(express.json());

app.get("/", async(req, res)=>{
    try{
    const f = await fact.find({});
    res.status(200).send({fun_fact :f[Math.floor(Math.random() * (f.length - 1))] });
    }catch(e){
        res.status(404).send("Unable to reach right now");
    }
})
app.post("/", async(req, res)=>{

    try{    
        
        const f = new fact({fact : req.body.fact});
        await f.save()
        res.status(200).send("Successfully created");
    }catch(e){
        res.status(400).send(e);
    }
})
app.listen(port, ()=>{
    console.log("Listening to port number - "+ port);
});