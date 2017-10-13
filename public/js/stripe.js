// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("pk_test_pS1AgpHyxfjsqwB6Ltl1uYAJ");

// Token is created using Stripe.js or Checkout!
// Get the payment token ID submitted by the form:
var token = request.body.stripeToken; // Using Express

// Charge the user's card:
stripe.charges.create({
    amount: 1000,
    currency: "usd",
    description: "Example charge",
    source: token,
  }, function(err, charge) {
    // asynchronously called
    console.log("I've stolen your credit card information! haha");
  });


