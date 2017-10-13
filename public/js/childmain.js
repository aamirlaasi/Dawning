$(document).ready(function () {

    $("#al1").hide();
    $("#pg3").hide();
    $("#pg4").hide();
});



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
}




$("#btn-add1").click(function () {

    $("#frst1").hide();
    $("#al1").show();
    var splittedFormData = $("#myyform").serialize().split('&');

    console.log(splittedFormData)

});


$("#btn-add2").click(function () {

    $("#frst1").hide();
    $("#al1").hide();
    $("#pg3").show();


    console.log(splittedFormData)

});

$("#btn-add3").click(function () {

    $("#frst1").hide();
    $("#al1").hide();
    $("#pg3").hide();
    $("#pg4").show();


    console.log(splittedFormData)

});






$("#btn-add").click(function () {

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