var Plant = require('./models/plant.js');

//Add plant
exports.addPlant = function(req, res, next) {
    Plant.create(req.body, function(err, plant) {
        if (err)
            return next(err);
        else
            res.json({
                text: "Created plant",
                plant: plant
            });
    })
}

//Get all plants
exports.getPlants = function(req, res, next) {
    Plant.find(function(err, plants) {
        if (err)
            return next(err)
        else
            res.json(plants)
    })
}

//Get a specific plant
exports.getOnePlant = function(req, res, next) {
    Plant.find({
        _id: req.params.plant_id
    }, function(err, plant) {
        if (err)
            return next(err)
        else
            res.json(plant);
    })
}

//Delete a specific plant
exports.deletePlant = function(req, res, next) {
    Plant.remove({
        _id: req.params.plant_id
    }, function(err, plant) {
        if (err)
            return next(err);
        else
            res.json({
                text: "Deleted plant"
            })
    })
}

//Update a specific plant
exports.updatePlant = function(req, res, next) {
    Plant.findByIdAndUpdate({
        _id: req.params.plant_id
    }, req.body, function(err, plant) {
        if (err)
            return next(err)
        else
            res.json("updated plant (id: " + req.params.plant_id);
    })
}