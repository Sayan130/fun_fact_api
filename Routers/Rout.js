const mongoose = require("mongoose")
const express = require("express");
const fact = require("../models/fact");
const router = new express.Router();



router.get("/", async(req, res)=>{
    
    try{

        if(req.query.category != undefined){
            if(req.query.category === "true"){
                fact.find().distinct('category').exec((err, result)=>{
                    
                    if(err)throw new Error(err);
                    else return res.send({category : result});
                });
                
            }
            else{
                
                fact.find({category : req.query.category}).estimatedDocumentCount(async(err, result)=>{  

                    if(err === null)count = result;
                    count = Math.floor(Math.random() * (count - 1));
                    console.log(count);
                    const f = await fact.findOne({category : req.query.category}).skip(count);
                    res.status(200).send({fun_fact :f });
                    
                    });
            }
        }
        else{
                fact.estimatedDocumentCount(async(err, result)=>{  

                if(err === null)count = result;
                count = Math.floor(Math.random() * (count - 1));
                const f = await fact.findOne({}).skip(count);
                res.status(200).send({fun_fact :f.fact });
                
                });
            }

    }catch(e){
        res.status(404).send(e);
    }
    
})

router.post("/", async(req, res)=>{

    try{    
        
        const f = new fact(req.body);
        await f.save()
        res.status(200).send("Successfully created");
    }catch(e){
        res.status(400).send(e);
    }
})
module.exports = router;