$(document).ready(function () {
    var a=1000;
    
    function myFunction() {
        $(".circle").animate({ "top": "70%" },a).animate({ "top": "10%" }, a, myFunction);
    }

    $("#backcolor").change(function () {
        $(".circle").css("background-color", $(this).val());
    })


    $("#image").blur(function () {
        $(".circle").css('background-image', 'url("' + $('#image').val() + '")');
    });
    $("#backimage").blur(function () {
        $(".screen").css('background-image', 'url("' + $('#backimage').val() + '")');
    })

    $("#range").change(function(){
        $(".circle").css("width",$(this).val()+"px");
    })
   $("#speed").change(function(){

    a=Number($(this).val());
    myFunction();
    

   })


    myFunction();
})