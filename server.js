// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var stripe = require("stripe")("pk_test_pS1AgpHyxfjsqwB6Ltl1uYAJ");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// SET UP EXPRESS
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// STATIC DIRECTORY TO BE SERVED
app.use(express.static("public"));
app.use(express.static("views"));

// ROUTES
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});