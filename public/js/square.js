var queryURL = "https://connect.squareup.com/v2/locations";

$.ajax({
          url: queryURL,
          method: "GET",
          Authorization: 'Bearer sq0atp-YRoMJpxEclGjRK3zicLw5w',
        }).done(function(response){
          console.log(response);
});



// var jsonData = JSON.parse(responseBody);
// for(var i = 0;i< jsonData.locations.length;i++){
//     if (jsonData.locations[i].capabilities){
//         postman.setEnvironmentVariable("location_id", jsonData.locations[i].id);
//         return
//     }
//     else{
//         if (i==jsonData.locations.length-1){
//              postman.setEnvironmentVariable("location_id", jsonData.locations[i].id);
//         }
//     }
// }
