require("../../square.js");

squareup.ListTransactions({
  "location_id": "NZ4MGQRSSPSNQ"
}, context).then(data => {
  console.log(data);
})