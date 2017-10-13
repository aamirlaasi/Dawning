
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

// Need to add event.preventDefault() and validation
// for missing entries
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


   console.log(splittedFormData);
  // ...this is where we’d actually do something with the form data...
  console.log(splittedFormData[0]);
  
  // This is a test....need to create a loop to go through
  // all the data in the form
  var formDataFinal = [];
  for (var i = 0; i < splittedFormData.length; i++) {
    formDataFinal[i] = splittedFormData[i].substring(splittedFormData[i].indexOf("=") + 1).trim();
  }
  console.log(formDataFinal);
  console.log(formDataFinal[0]);

  // Constructing a newChild object to hand to the database
  var newChild = {
    child_LASTNAME: formDataFinal[0],
    CHILD_FIRSTNAME: formDataFinal[1],
    // CHILD_MIDDLEINT: "",
    BIRTHDAY: formDataFinal[2]
    // CLASSROOM: FormDataFinal[13].val().trim(),
    // SCHOOL: FormDataFinal[14].val().trim(),
    // ENROLL_DATE: "",
    // DROP_DATE: "",
    // TEACHER: "",
    // DOCTOR_NAME: FormDataFinal[5].val().trim(),
    // DOCTOR_ADDRESS: FormDataFinal[6].val().trim(),
    // DOCTOR_PHONE: FormDataFinal[7].val().trim(),
    // HOSPITAL_PREF: FormDataFinal[8].val().trim(),
    // GENDER: FormDataFinal[3].val().trim(),
    // RACE: FormDataFinal[4].val().trim(),
    // ALLERGY_1: "",        
    // ALLERGY_2: "",        
    // ALLERGY_3: "",        
    // ALLERGY_4: "",        
    // ALLERGY_5: "",
    // ALLERGY_RESOLVE_1: "",
    // ALLERGY_RESOLVE_2: "",
    // ALLERGY_RESOLVE_3: "",
    // ALLERGY_RESOLVE_4: "",
    // ALLERGY_RESOLVE_5: "",              
    // MEDICAL_CONDITION_1: "",
    // MEDICAL_CONDITION_2: "",
    // MEDICAL_CONDITION_3: "",
    // MEDICAL_CONDITION_4: "",
    // MEDICAL_CONDITION_5: "",
    // SPECIAL_BEHAVIORS: "",
    // CHILD_ARRIVAL_TIME: "",
    // CHILD_DEPARTURE_TIME: "",
    // ATTEND_DAY_MONDAY: "",
    // ATTEND_DAY_TUESDAY: "",
    // ATTEND_DAY_WEDNESDAY: "",
    // ATTEND_DAY_THURSDAY: "",
    // ATTEND_DAY_FRIDAY: "",
    // ATTEND_DAY_SATURDAY: "",
    // ATTEND_DAY_SUNDAY: "",
    // MEDIA_PERMISSION: "",
    // TRANSPORTATION_PERMISSION_SCHOOL: "",
    // TRANSPORTATION_PERMISSION_EMER: "",
    // TRANSPORTATION_PERMISSION_HOME: "",
    // iMMUNIZATION_RECORDS: "",
    // COMMENTS: "",
    // HEALTH_STATEMENT: ""
      
    // add other data here
  };

  console.log(newChild);

  // Submits a new child and brings user to addchild page upon completion
  function submitChild(Child) {
    $.post("/api/child/", Child, function() {
      window.location.href = "/addchild";
    });
  }

  submitChild(newChild);

});