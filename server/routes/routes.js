module.exports = function(app){
    app.use('/plants',require("./plants/route.js"));
}