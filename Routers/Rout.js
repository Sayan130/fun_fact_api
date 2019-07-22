const mongoose = require("mongoose")
const express = require("express");
const fact = require("../models/fact");
const router = new express.Router();

router.get("/", async(req, res)=>{
    let count = 0;
    fact.estimatedDocumentCount(async(err, result)=>{
        
        try{    

        if(err === null)count = result;
        
        count = Math.floor(Math.random() * (count - 1));
        const f = await fact.findOne({}).skip(count);
        res.status(200).send({fun_fact :f });
        }catch(e){
        res.status(404).send(e);
    }
    });
    
    
})
router.post("/", async(req, res)=>{

    try{    
        
        const f = new fact({fact : req.body.fact});
        await f.save()
        res.status(200).send("Successfully created");
    }catch(e){
        res.status(400).send(e);
    }
})
module.exports = router;