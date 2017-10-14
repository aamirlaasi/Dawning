// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// DEPENDENCIES
// =============================================================


var path = require("path");

// ROUTES
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // Index route loads index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    // Home route also loads index.html
    app.get("/Home", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });    

    // Registration route loads childmain.html where user will can enter child/parent information.
    app.get("/Registration", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/childmain.html"));

        // if (req.user) {
        //     res.redirect("/members");
        // }
        // res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    // About route loads About.html
    app.get("/About", function(req,res){
        res.sendFile(path.join(__dirname, "../views/about.html"))
    })

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    // app.get("/members", isAuthenticated, function (req, res) {
        // res.sendFile(path.join(__dirname, "../public/members.html"));
    // });

    //});
    // Add route loads add.html
    // app.get("/add", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/add.html"));
    // });

};
