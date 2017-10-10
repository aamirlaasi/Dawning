require("../../square.js");


squareup.CreateCustomer({
  "body": {
  	"given_name": $(#given_name).val();
  	"family_name": $(#family_name).val();
  	"company_name": $(#company_name).val();
  	"email_address": $(#email_address).val();
  	"phone_number": $(#phone_number).val();
  }
}, context).then(data => {
  console.log(data);
})
