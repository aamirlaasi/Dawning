// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Child model
var db = require("../models");

// ROUTES
// =============================================================
module.exports = function(app){
    // app.get("route", function(req, res) {
    //     // search parent if found check and display kids
    // });


    // app.post("route", function(req, res){

    //     var parent = req.body;

    //     orm.addParent(parent, function(data){
    //         console.log(data);
    //     });
    // });
    
    // POST route for saving new child information
    app.post("/api/child", function(req, res) {
    	console.log(req.body);
    	db.Child.create({
    		child_LASTNAME: req.body.child_LASTNAME,
    		CHILD_FIRSTNAME: req.body.CHILD_FIRSTNAME,
    		CHILD_MIDDLEINT: req.body.CHILD_MIDDLEINT
    	})
    	.then(function(dbChild){
    		res.json(dbChild);
    	});
    });









}