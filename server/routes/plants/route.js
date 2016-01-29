var express = require("express");
var router = express.Router();
var Plant = require("./models/plant.js");
var plantController = require("./controller.js")

//Routes for all plants
router.route('/')
    .post(function(req,res,next){
        plantController.addPlant(req,res,next);
    })
    .get(function(req,res,next){
        plantController.getPlants(req,res,next);
    });

//Routes for specific plant
router.route('/:plant_id')
    .get(function(req,res,next){
        plantController.getOnePlant(req,res,next);
    })
    .delete(function(req,res,next){
        plantController.deletePlant(req,res,next);
    })
    .post(function(req,res,next){
        plantController.updatePlant(req,res,next);
    });
    
module.exports = router;