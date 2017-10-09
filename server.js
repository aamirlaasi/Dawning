
// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// SET UP EXPRESS
var app = express();
var PORT = process.env.PORT || 8080;

// DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// STATIC DIRECTORY TO BE SERVED
app.use(express.static("app/public"));

// ROUTES
require("./routes/api-routes.js")(app);
require("./routes/html-routes")(app);

// LISTENER
app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT);
})
