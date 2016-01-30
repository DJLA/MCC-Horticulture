module.exports = function(){
    var Plant = require('./routes/plants/models/plant.js');
    
    var dataArray = [
        {
            name:"Plant One",
            description:"Example Description One"
        }     
    ]
    
    Plant.find(function(err,docs){
        for(var i in docs){
            var doc = docs[i];
            doc.remove();
        }
    });
    
    for(var i in dataArray){
        var plant = dataArray[i];
        Plant.create(plant, function(err, plant) {
            if (err){
                console.log("error")
            }
            else{
                console.log("Done")
            }
        })    
    }
}
