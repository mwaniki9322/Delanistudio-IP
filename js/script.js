$(document).ready(function(){
$('#image3').click(function(){
    $('#image3').toggle();
    $('#p-1').toggle();
})
$('#p-1').click(function(){
    $('#p-1').toggle();
    $('#image3').toggle();

})
$('#image4').click(function(){
    $('#image4').toggle();
    $('#p-2').toggle();
});
$('#p-2').click(function(){
    $('#p-2').toggle();
    $('#image4').toggle();
})
$('#image5').click(function(){
    $('#image5').toggle();
    $('#p-3').toggle();
})
$('#p-3').click(function(){
    $('#p-3').toggle();
    $('#image5').toggle();
});
$("#work4").hover(function () {
    $("#overlay").toggle();
});
$("#work3").hover(function () {
    $("#overlay2").toggle();
});
$("#work2").hover(function () {
    $("#overlay3").toggle();
});
$("#work1").hover(function () {
    $("#overlay4").toggle();
});
$("#work5").hover(function () {
    $("#overlay5").toggle();
});
$("#work6").hover(function () {
    $("#overlay6").toggle();
});
$("#work7").hover(function () {
    $("#overlay7").toggle();
});

$("#work8").hover(function () {
    $("#overlay8").toggle();
});







$('form').submit(function(){
    var name=document.getElementById('name2').value;
    var email=document.getElementById('email2').value;
    var message=document.getElementById('message2').value;

    var result= name + email + message;

    alert('Hello ' + name +' ,We have recieved your message.Thankyou for reaching out to us');

})




});