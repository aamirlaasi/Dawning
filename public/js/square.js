let datafire = require('datafire');
let squareup = require('@datafire/squareup').actions;
 
let account = {
  access_token: "sq0atp-YRoMJpxEclGjRK3zicLw5w",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    squareup: account,
  }
})
 
squareup.ListCustomers({}, context).then(data => {
  console.log(data);
})