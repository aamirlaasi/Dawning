$(document).ready(function () {

    // Hide the div that asks for the child's medical information
    $("#al1").hide();
        $("#al2").hide();
            $("#al3").hide();
                $("#al4").hide();
    // Hide the div that asks for child's address and parents' information
    $("#pg3").hide();
    // Hide the div that asks for payment information
    $("#pg4").hide();
     // Hide the div that asks for payment information
    $("#pg2").hide();
        $("#pg1").hide();
            $("#pg5").hide();
});

$("#btn-enr").click(function () {

    // Hide the first part of the form that was just filled out
    $("#intro").hide();
        $("#pg1").show();
});

$("#btn-pg2").click(function () {

    // Hide the first part of the form that was just filled out
    $("#pg1").hide();
        $("#pg2").show();
});

$("#btn-pg3").click(function () {

    // Hide the first part of the form that was just filled out
    $("#pg2").hide();
        $("#pg3").show();
});
$("#btn-pg5").click(function () {

    // Hide the first part of the form that was just filled out
    $("#pg4").hide();
        $("#pg5").show();
});

$("#btn-allgno").click(function () {

    // Hide the first part of the form that was just filled out
    $("#pg3").hide();
        $("#pg4").show();
});
$("#btn-allgyes").click(function () {

    // Hide the first part of the form that was just filled out
        $("#al1").show();
});
// Create objects that will store child and parent data to be 
// passed on to the mysql database
var childData = {};
var parentData = {};

$('.selectpicker').selectpicker({
    size: 10
});


// This function capitalizes all entries to the form
function myFunction() {

    var x = document.getElementById("child_last_name");
    x.value = x.value.toUpperCase();

    var x = document.getElementById("child_first_name");
    x.value = x.value.toUpperCase();

    var x = document.getElementById("hospital_pref");
    x.value = x.value.toUpperCase();

    var x = document.getElementById("doctor_name");
    x.value = x.value.toUpperCase();

    var x = document.getElementById("doctor_address");
    x.value = x.value.toUpperCase();
};

// When the first "Save and Continue" button is clicked
// create the childData object to store user information
$("#btn-add1").click(function () {

    // Hide the first part of the form that was just filled out
    $("#frst1").hide();
    // Show the medical information form
    $("#al1").show();
    // Create object to store information entered in the first form
    childData = {
        child_last_name: $("#child_last_name").val(),
        child_first_name: $("#child_first_name").val(),
        child_birth: $("#child_birth").val(),
        gender: $("#gender").val(),
        race: $("#race").val(),
        doc_name: $("#doctor_name").val(),
        doc_address: $("#doctor_address").val(),
        doc_phone: $("#doctor_phone").val(),
        hospital_pref: $("#hospital_pref").val(),
        arrive_time: $("#arrive_time").val(),
        depart_time: $("#depart_time").val(),
        foptime: $("#foptime").val(),
        attenddays: $("#attenddays").val(),
        meals: $("#meals").val(),
        potty: $("#potty").val(),
        classroom: $("#classroom").val(),
        school_attend: $("#school_attend").val(),
        enroll_date: $("#enroll_date").val()
    };

    console.log(childData)

});

// When the second "Save and Continue" button is clicked
// add medical information to the childData object 
$("#btn-add2").click(function () {

    // Hide the first part of the form
    $("#frst1").hide();
    // Hide the medical information form
    $("#al1").hide();
    // Show the third page of the form for parent information
    $("#pg3").show();
    // Add medical 
    childData.allergy = $("#allergies").val(),
    childData.allergy_response = $("#allergy_response").val(),
    childData.medical_condition_1 = $("#medical_condition_1").val(),
    childData.medical_response_1 = $("#medical_response_1").val(),
    childData.drug_list = $("#drug_list").val(),
    childData.drug_response = $("#drug_response").val(),
    childData.behave = $("#behave").val(),
    childData.behave_response = $("#behave_response").val(),
    childData.other_conditions = $("#other_conditions").val()

    console.log(childData)

});

// When the third "Save and Continue" button is clicked
// create the parentData object to store parent information
$("#btn-add3").click(function () {

    // Hide the first three forms
    $("#frst1").hide();
    $("#al1").hide();
    $("#pg3").hide();
    // Show the payment form
    $("#pg4").show();

    // Add parent information to parentData object
    parentData = {
        address: $("#address").val(),
        city: $("#city").val(),
        zip: $("#zip").val(),
        parent_last_name: $("#parent_last_name").val(),
        parent_first_name: $("#parent_first_name").val(),
        parent1_phone_1: $("#parent1_phone_1").val(),
        parent1_phone_2: $("#parent1_phone_2").val(),
        parent2_last_name: $("#parent2_last_name").val(),
        parent2_first_name: $("#parent2_first_name").val(),
        parent2_phone_1: $("#parent2_phone_1").val(),
        parent2_phone_2: $("#parent2_phone_2").val(),
        email_address: $("email_address").val(),
        emergency1_name: $("#emergency1_name").val(),
        emergency1_address: $("#emergency1_address").val(),
        emergency1_phone_1: $("#emergency1_phone_1").val(),
        emergency1_phone_2: $("#emergency1_phone_2").val(),
        emergency2_name: $("#emergency2_name").val(),
        emergency2_phone_1: $("#emergency2_phone_1").val(),
        emergency2_phone_2: $("#emergency2_phone_2").val(),
        emergency3_name: $("#emergency3_name").val(),
        emergency3_phone_1: $("#emergency3_phone_1").val(),
        emergency3_phone_2: $("#emergency3_phone_2").val(),
        emergency4_name: $("#emergency4_name").val(),
        emergency4_phone_1: $("#emergency4_phone_1").val(),
        emergency4_phone_2: $("#emergency4_phone_2").val()
    }

    console.log(parentData)

});


$("#btn-add4").click(function () {

    // Need to clarify what information we want to show when
    // the last button is clicked
    $("#frst1").hide();
    $("#al1").hide();
    $("#pg3").hide();


    parentData.tuition_amt = $("#tuition_amt").val(),
        parentData.pay_frequency = $("#pay_frequency").val(),
        parentData.start_date = $("#start_date").val(),
        parentData.authorize_date = $("#authorize_date").val(),
        parentData.end_care_date = $("#end_care_date").val()

    console.log(parentData)
    
    // Send child information to the database
    submitChild(childData);
    // Send parent information to the database
    // This is not the right place to execute this call
    submitParent(parentData);
});

// Submits a new child and brings user to addchild page upon completion
function submitChild(Child) {
    $.post("/api/child/", Child, function() {
      // Run this with either child or parent but not both.
      // Create a page that says Registration Complete!
      window.location.href = "/Registration";
    });
}

// Submits a new parent and brings user to addchild page upon completion
function submitParent(Parent) {
    $.post("/api/parent/", Parent, function() {
      // Run this with either child or parent but not both.
        window.location.href = "/Registration";
    });
}





