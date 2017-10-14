// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Child model
var db = require("../models");
var passport = require("../config/passport");

// ROUTES
// =============================================================
module.exports = function(app){

    // POST route for saving new child information
    app.post("/api/child", function(req, res) {
    	console.log(req.body);
    	db.child.create({
    		child_LASTNAME: req.body.child_last_name,
    		CHILD_FIRSTNAME: req.body.child_first_name,
    		// CHILD_MIDDLEINT: req.body.CHILD_MIDDLEINT,
    		BIRTHDAY: req.body.child_birth,
      	// SCHOOL: req.body.SCHOOL,
  			ENROLL_DATE: req.body.enroll_date,
  			// DROP_DATE: req.body.DROP_DATE,
  			// TEACHER: req.body.TEACHER,
  			DOCTOR_NAME: req.body.doc_name,
  			DOCTOR_ADDRESS: req.body.doc_address,
  			DOCTOR_PHONE: req.body.doctor_phone,
  			HOSPITAL_PREF: req.body.hospital_pref,
  			GENDER: req.body.gender,
  			RACE: req.body.race
  			// ALLERGY_1: req.body.ALLERGY_1,    		
  			// ALLERGY_2: req.body.ALLERGY_2,    		
  			// ALLERGY_3: req.body.ALLERGY_3,    		
  			// ALLERGY_4: req.body.ALLERGY_4,    		
  			// ALLERGY_5: req.body.ALLERGY_5,
  			// ALLERGY_RESOLVE_1: req.body.ALLERGY_RESOLVE_1,
  			// ALLERGY_RESOLVE_2: req.body.ALLERGY_RESOLVE_2,
  			// ALLERGY_RESOLVE_3: req.body.ALLERGY_RESOLVE_3,
  			// ALLERGY_RESOLVE_4: req.body.ALLERGY_RESOLVE_4,
  			// ALLERGY_RESOLVE_5: req.body.ALLERGY_RESOLVE_5,			    		
  			// MEDICAL_CONDITION_1: req.body.MEDICAL_CONDITION_1,
  			// MEDICAL_CONDITION_2: req.body.MEDICAL_CONDITION_2,
  			// MEDICAL_CONDITION_3: req.body.MEDICAL_CONDITION_3,
  			// MEDICAL_CONDITION_4: req.body.MEDICAL_CONDITION_4,
  			// MEDICAL_CONDITION_5: req.body.MEDICAL_CONDITION_5,
  			// SPECIAL_BEHAVIORS: req.body.SPECIAL_BEHAVIORS,
  			// CHILD_ARRIVAL_TIME: req.body.CHILD_ARRIVAL_TIME,
  			// CHILD_DEPARTURE_TIME: req.body.CHILD_DEPARTURE_TIME,
  			// ATTEND_DAY_MONDAY: req.body.ATTEND_DAY_MONDAY,
  			// ATTEND_DAY_TUESDAY: req.body.ATTEND_DAY_TUESDAY,
  			// ATTEND_DAY_WEDNESDAY: req.body.ATTEND_DAY_WEDNESDAY,
  			// ATTEND_DAY_THURSDAY: req.body.ATTEND_DAY_THURSDAY,
  			// ATTEND_DAY_FRIDAY: req.body.ATTEND_DAY_FRIDAY,
  			// ATTEND_DAY_SATURDAY: req.body.ATTEND_DAY_SATURDAY,
  			// ATTEND_DAY_SUNDAY: req.body.ATTEND_DAY_SUNDAY,
  			// MEDIA_PERMISSION: req.body.MEDIA_PERMISSION,
  			// TRANSPORTATION_PERMISSION_SCHOOL: req.body.TRANSPORTATION_PERMISSION_SCHOOL,
  			// TRANSPORTATION_PERMISSION_EMER: req.body.TRANSPORTATION_PERMISSION_EMER,
  			// TRANSPORTATION_PERMISSION_HOME: req.body.TRANSPORTATION_PERMISSION_HOME,
  			// iMMUNIZATION_RECORDS: req.body.iMMUNIZATION_RECORDS,
  			// COMMENTS: req.body.COMMENTS,
  			// HEALTH_STATEMENT: req.body.HEALTH_STATEMENT
    	})
    	.then(function(dbChild){
    		res.json(dbChild);
    	});
    });

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });


  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

}







