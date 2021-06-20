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
$('#work4').hover(function(){
    $('#overlay').toggle();    
})
$('#overlay').hover(function(){
    $('#work4').ho
})


$('form').submit(function(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('message').value;

    var result= name + email + message;

    alert('Hello ' + name +' ,We have recieved your message');

})




});