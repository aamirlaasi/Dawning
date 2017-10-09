// ROUTES FOR DISPLAYING + SAVING DATA TO DB

// DEPENDENCIES
var orm = require("../config/orm.js");

// ROUTES
module.exports = function(app){
    app.get("route", function(req, res) {
        // search parent if found check and display kids
    });


    app.post("route", function(req, res){

        var parent = req.body;

        orm.addParent(parent, function(data){
            console.log(data);
        });
    });










}