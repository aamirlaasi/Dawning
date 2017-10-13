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
    	db.child.create({
    		child_LASTNAME: req.body.child_LASTNAME,
    		CHILD_FIRSTNAME: req.body.CHILD_FIRSTNAME,
   //  		// CHILD_MIDDLEINT: req.body.CHILD_MIDDLEINT,
    		BIRTHDAY: req.body.BIRTHDAY
   //  		// CLASSROOM: req.body.CLASSROOM,
   //  		// SCHOOL: req.body.SCHOOL,
			// // ENROLL_DATE: req.body.ENROLL_DATE,
			// // DROP_DATE: req.body.DROP_DATE,
			// // TEACHER: req.body.TEACHER,
			// // DOCTOR_NAME: req.body.DOCTOR_NAME,
			// // DOCTOR_ADDRESS: req.body.DOCTOR_ADDRESS,
			// // DOCTOR_PHONE: req.body.DOCTOR_PHONE,
			// // HOSPITAL_PREF: req.body.HOSPITAL_PREF,
			// // GENDER: req.body.GENDER,
			// // RACE: req.body.RACE,
			// // ALLERGY_1: req.body.ALLERGY_1,    		
			// // ALLERGY_2: req.body.ALLERGY_2,    		
			// // ALLERGY_3: req.body.ALLERGY_3,    		
			// // ALLERGY_4: req.body.ALLERGY_4,    		
			// // ALLERGY_5: req.body.ALLERGY_5,
			// // ALLERGY_RESOLVE_1: req.body.ALLERGY_RESOLVE_1,
			// // ALLERGY_RESOLVE_2: req.body.ALLERGY_RESOLVE_2,
			// // ALLERGY_RESOLVE_3: req.body.ALLERGY_RESOLVE_3,
			// // ALLERGY_RESOLVE_4: req.body.ALLERGY_RESOLVE_4,
			// // ALLERGY_RESOLVE_5: req.body.ALLERGY_RESOLVE_5,			    		
			// // MEDICAL_CONDITION_1: req.body.MEDICAL_CONDITION_1,
			// // MEDICAL_CONDITION_2: req.body.MEDICAL_CONDITION_2,
			// // MEDICAL_CONDITION_3: req.body.MEDICAL_CONDITION_3,
			// // MEDICAL_CONDITION_4: req.body.MEDICAL_CONDITION_4,
			// // MEDICAL_CONDITION_5: req.body.MEDICAL_CONDITION_5,
			// // SPECIAL_BEHAVIORS: req.body.SPECIAL_BEHAVIORS,
			// // CHILD_ARRIVAL_TIME: req.body.CHILD_ARRIVAL_TIME,
			// // CHILD_DEPARTURE_TIME: req.body.CHILD_DEPARTURE_TIME,
			// // ATTEND_DAY_MONDAY: req.body.ATTEND_DAY_MONDAY,
			// // ATTEND_DAY_TUESDAY: req.body.ATTEND_DAY_TUESDAY,
			// // ATTEND_DAY_WEDNESDAY: req.body.ATTEND_DAY_WEDNESDAY,
			// // ATTEND_DAY_THURSDAY: req.body.ATTEND_DAY_THURSDAY,
			// // ATTEND_DAY_FRIDAY: req.body.ATTEND_DAY_FRIDAY,
			// // ATTEND_DAY_SATURDAY: req.body.ATTEND_DAY_SATURDAY,
			// // ATTEND_DAY_SUNDAY: req.body.ATTEND_DAY_SUNDAY,
			// // MEDIA_PERMISSION: req.body.MEDIA_PERMISSION,
			// // TRANSPORTATION_PERMISSION_SCHOOL: req.body.TRANSPORTATION_PERMISSION_SCHOOL,
			// // TRANSPORTATION_PERMISSION_EMER: req.body.TRANSPORTATION_PERMISSION_EMER,
			// // TRANSPORTATION_PERMISSION_HOME: req.body.TRANSPORTATION_PERMISSION_HOME,
			// // iMMUNIZATION_RECORDS: req.body.iMMUNIZATION_RECORDS,
			// // COMMENTS: req.body.COMMENTS,
			// // HEALTH_STATEMENT: req.body.HEALTH_STATEMENT
    	})
    	.then(function(dbChild){
    		res.json(dbChild);
    	});
    });
}



