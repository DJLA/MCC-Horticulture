var loremIpsum = require('lorem-ipsum')
var output = loremIpsum({
    count: Math.floor((Math.random() * 3) + 1)       // Number of words, sentences, or paragraphs to generate. 
  , units: 'words'            // Generate words, sentences, or paragraphs. 
  , format: 'plain'               // Plain text or html 
  , random: Math.random           // A PRNG function. Uses Math.random by default 
});

console.log(output);
  
module.exports = function(){
    var Plant = require('./routes/plants/models/plant.js');
    
    Plant.find(function(err,docs){
        for(var i in docs){
            var doc = docs[i];
            doc.remove();
        }
    });
    
    for(var i in 20){
        var plant = {
                name: loremIpsum({
                    count: Math.floor((Math.random() * 3) + 1)       // Number of words, sentences, or paragraphs to generate. 
                  , units: 'words'            // Generate words, sentences, or paragraphs. 
                  , format: 'plain'               // Plain text or html 
                  , random: Math.random           // A PRNG function. Uses Math.random by default                 
                }),
                description:loremIpsum({
                    count: Math.floor((Math.random() * 2) + 1)       // Number of words, sentences, or paragraphs to generate. 
                  , units: 'paragraphs'            // Generate words, sentences, or paragraphs. 
                  , format: 'plain'               // Plain text or html 
                  , random: Math.random           // A PRNG function. Uses Math.random by default                            
                })
        }
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
