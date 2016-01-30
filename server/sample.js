module.exports = function(){
    var Plant = require('./routes/plants/models/plant.js');
    
    var dataArray = [
        {
            name:"Plant One",
            description:"Example Description One"
        },
        {
            name:"Plant Two",
            description:"Example Description Two"
        },
        {
            name:"Plant Three",
            description:"Example Description Three"
        },
        {
            name:"Plant Four",
            description:"Example Description Four"
        },
        {
            name:"Plant Five",
            description:"Example Description Five"
        },
        {
            name:"Plant Six",
            description:"Example Description Six"
        },
        {
            name:"Plant Seven",
            description:"Example Description Seven"
        },        
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
