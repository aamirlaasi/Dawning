// ROUTES FOR SENDING USERES TO VARIOUS HTML PAGES

// DEPENDENCIES
var path = require("path");

// ROUTES
module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    app.get("/add", function(req, res){
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    
}