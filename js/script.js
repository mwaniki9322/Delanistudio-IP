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



});