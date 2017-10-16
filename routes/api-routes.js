// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Child model
var db = require("../models");
var passport = require("../config/passport");
var stripe = require("stripe")("sk_test_he0NSUz4h5opevwrLvhS3RUL");
var path = require("path");

// ROUTES
// =============================================================
module.exports = function (app) {

  // POST route for saving new child information
  app.post("/api/child", function (req, res) {
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
      DOCTOR_PHONE: req.body.doc_phone,
      HOSPITAL_PREF: req.body.hospital_pref,
      GENDER: req.body.gender,
      RACE: req.body.race,
      ALLERGY_1: req.body.allergy,
      // ALLERGY_2: req.body.ALLERGY_2,    		
      // ALLERGY_3: req.body.ALLERGY_3,    		
      // ALLERGY_4: req.body.ALLERGY_4,    		
      // ALLERGY_5: req.body.ALLERGY_5,
      ALLERGY_RESOLVE_1: req.body.allergy_response,
      // ALLERGY_RESOLVE_2: req.body.ALLERGY_RESOLVE_2,
      // ALLERGY_RESOLVE_3: req.body.ALLERGY_RESOLVE_3,
      // ALLERGY_RESOLVE_4: req.body.ALLERGY_RESOLVE_4,
      // ALLERGY_RESOLVE_5: req.body.ALLERGY_RESOLVE_5,			    		
      MEDICAL_CONDITION_1: req.body.medical_condition_1,
      // MEDICAL_CONDITION_2: req.body.MEDICAL_CONDITION_2,
      // MEDICAL_CONDITION_3: req.body.MEDICAL_CONDITION_3,
      // MEDICAL_CONDITION_4: req.body.MEDICAL_CONDITION_4,
      // MEDICAL_CONDITION_5: req.body.MEDICAL_CONDITION_5,
      SPECIAL_BEHAVIORS: req.body.behave,
      BEHAVIOR_RESPONSE: req.body.behave_response,
      MEDICAL_RESPONSE_1: req.body.medical_response_1,
      DRUG_LIST: req.body.drug_list,
      DRUG_RESPONSE: req.body.drug_response,
      OTHER_CONDITIONS: req.body.other_conditions,
      CHILD_ARRIVAL_TIME: req.body.arrive_time,
      CHILD_DEPARTURE_TIME: req.body.depart_time,
      FOPTIME: req.body.foptime,
      POTTY: req.body.potty
      //    ATTEND_DAY_MONDAY: req.body.attenddays[0],
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
      .then(function (dbChild) {
        res.json(dbChild);
      });
  });

  // POST route for saving new parent information
  app.post("/api/parent", function (req, res) {
    console.log(req.body);
    db.PARENT.create({
      PRIM_PARENT_LASTNAME: req.body.parent_last_name,
      PRIM_PARENT_FIRSTNAME: req.body.parent_first_name,
      PRIM_PARENT_PHONE_1: req.body.parent1_phone_1,
      PRIM_PARENT_PHONE_2: req.body.parent1_phone_2,
      // PRIM_PARENT_EMAIL: req.body.parent1_email,
      SEC_PARENT_LASTNAME: req.body.parent2_last_name,
      SEC_PARENT_FIRSTNAME: req.body.parent2_first_name,
      SEC_PARENT_PHONE_1: req.body.parent2_phone_1,
      SEC_PARENT_PHONE_2: req.body.parent2_phone_2,
      ADDRESS: req.body.address,
      CITY: req.body.city,
      ZIP: req.body.zip,
      EMR_CONTACT1_NAME: req.body.emergency1_name,
      EMR_CONTACT1_PHONE1: req.body.emergency1_phone_1,
      EMR_CONTACT1_PHONE2: req.body.emergency1_phone_2,
      EMR_CONTACT1_ADDRESS: req.body.emergency1_address,
      EMR_CONTACT2_NAME: req.body.emergency2_name,
      EMR_CONTACT2_PHONE1: req.body.emergency2_phone_1,
      EMR_CONTACT2_PHONE2: req.body.emergency2_phone_2,
      EMR_CONTACT3_NAME: req.body.emergency3_name,
      EMR_CONTACT3_PHONE1: req.body.emergency3_phone_1,
      EMR_CONTACT3_PHONE2: req.body.emergency3_phone_2,
      EMR_CONTACT4_NAME: req.body.emergency4_name,
      EMR_CONTACT4_PHONE1: req.body.emergency4_phone_1,
      EMR_CONTACT4_PHONE2: req.body.emergency4_phone_2,
      // NCI_TERM_DATE: , 
      PAY_FREQUENCY: req.body.pay_frequency,
      START_DATE: req.body.start_date,
      TUITION_AMOUNT: req.body.tuition_amt,
      AUTHORIZE_DATE: req.body.authorize_date,
      END_CARE_DATE: req.body.end_care_date
    })
      .then(function (dbParent) {
        res.json(dbParent);
      });
  });

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });


  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
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

  app.get("/paysuccess", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/transaction.html"));
  });

  app.post("/charge", function (req, res) {
    var token = req.body.stripeToken;
    var chargeAmount = req.body.chargeAmount;
    var charge = stripe.charges.create({
      amount: chargeAmount,
      currency: "USD",
      source: token
    }, function (err, charge) {
      if (err === "StripeCardError") {
        console.log("Your card has declined");
      };
    });
    console.log(token);
    console.log(chargeAmount);
    console.log(charge);
    console.log("Your payment was successful!");
    res.redirect("/paysuccess");
  });

  app.get("/charges", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/charges.html"));
    stripe.charges.list(
      { limit: 1 },
      function (err, charges) {
        // asynchronously called
        console.log(charges.data[0].id);
        console.log(charges.data[0].amount);
        console.log(charges.data[0].source.last4);
        console.log(charges.data[0].source.name);
        var receipt = {
          id: charges.data[0].id,
          amount: charges.data[0].amount,
          last4: charges.data[0].source.last4,
          email: charges.data[0].source.name
        }
        console.log(receipt);
      });
  });
}