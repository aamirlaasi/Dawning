$(document).ready(function () {

    $("#al1").hide();
    $("#pg3").hide();
    $("#pg4").hide();
});

var childData = {};
var parentData = {};

$('.selectpicker').selectpicker({
    size: 10
});



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




$("#btn-add1").click(function () {

    $("#frst1").hide();
    $("#al1").show();
    // var splittedFormData = $("#myyform").serialize().split('&');

    // console.log(splittedFormData)

    childData = {
        child_last_name: $("#child_last_name").val(),
        child_first_name: $("#child_first_name").val(),
        child_birth: $("#child_birth").val(),
        gender: $("#gender").val(),
        race: $("#race").val(),
        doc_name: $("#doctor_name").val(),
        doc_adddress: $("#doctor_address").val(),
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
        potty: $("#potty").val(),
        enroll_date: $("#enroll_date").val()


    };

    console.log(childData)


});












$("#btn-add2").click(function () {

    $("#frst1").hide();
    $("#al1").hide();
    $("#pg3").show();


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

$("#btn-add3").click(function () {

    $("#frst1").hide();
    $("#al1").hide();
    $("#pg3").hide();
    $("#pg4").show();

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

    $("#frst1").hide();
    $("#al1").hide();
    $("#pg3").hide();


    parentData.tuition_amt = $("#tuition_amt").val(),
        parentData.pay_frequency = $("#pay_frequency").val(),
        parentData.start_date = $("#start_date").val(),
        parentData.authorize_date = $("#authorize_date").val(),
        parentData.end_care_date = $("#end_care_date").val()




    console.log(parentData)




});