require("../../square.js");

squareup.Charge({
  "location_id": "NZ4MGQRSSPSNQ",
  "body": {
    "idempotency_key": "",
    "amount_money": {}
  }
}, context).then(data => {
  console.log(data);
})