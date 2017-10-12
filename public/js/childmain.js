
$(document).ready(function(){
	$("#dontsee").hide();
	$("#al1").hide();
	$("#al2").hide();
	$("#al3").hide();
	$("#al4").hide();
	$("#medques").hide();
	$("#drugques").hide();
	$("#otrques").hide();
    $("#allergyyes").click(function(){
    	console.log("jss")
        $("#al1").show();
    });
});

    $("#allergyno").click(function(){
    	console.log("jss")
        $("#medques").show();
    });

     $("#moal1").click(function(){
    	console.log("jss")
        $("#al2").show();
    });
  $("#moal2").click(function(){
    	console.log("jss")
        $("#al3").show();
    });

 $("#moal3").click(function(){
    	console.log("jss")
        $("#al4").show();
          $("#medques").show();
    });

$('.selectpicker').selectpicker({
  size: 10
});




function myFunction() {
    var x = document.getElementById("child_last_name");
    x.value = x.value.toUpperCase();
 var x = document.getElementById("child_first_name");
    x.value = x.value.toUpperCase();
 var x = document.getElementById("child_last_name");
    x.value = x.value.toUpperCase();
 var x = document.getElementById("child_last_name");
    x.value = x.value.toUpperCase();
 var x = document.getElementById("doctor_name");
    x.value = x.value.toUpperCase();
 var x = document.getElementById("doctor_address");
    x.value = x.value.toUpperCase();








}
$("#btn-add").click(function(){

    var text = document.getElementById("child_last_name").innerHTML;
    document.getElementById("child_last_name").innerHTML = text.toUpperCase();

 //$("#btn-add").click(function(){

    console.log(text)

//var wasup = $('#myyform').serialize();
//console.log($('#myyform').serialize());

//console.log(wasup)

 //var jsonArray = [];

   var splittedFormData = $("#myyform").serialize().split('&');

  //          $.each(splittedFormData, function (key, value) {

    //            item = {};
    //          var splittedValue = value.split('=');               
    //           item["name"] = splittedValue[0];
    ///          item["value"] = splittedValue[1];
    //         jsonArray.push(item);

      //      });

//   console.log(jsonArray)


   console.log(splittedFormData)
  // ...this is where we’d actually do something with the form data...


});