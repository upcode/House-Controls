$(document).ready(function() {
    var fireDiv = $('<div class="flames"><div class="flame"></div><div class="flame"></div><div class="flame"></div><div class="flame"></div></div><div class="logs"></div>');
    var fanDiv = $(' <div class="ceiling-container"><div class="ceiling-fan horizontal left"></div><div class="ceiling-fan horizontal right"></div><div class="ceiling-fan vertical rotated top"></div><div class="ceiling-fan vertical rotated bottom"></div></div>');
    var windowDiv = $('<div class="house-window-frame"><div class="house-window"></div><div class="house-window"></div><div class="house-window"></div><div class="house-window"></div></div>');
    var currentDate = new Date();
    var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    $("#clock").html(currentTime);


    $(".light-switch").click(function() {
        $(".off").toggleClass("on");
        if ($(this).text() == 'Off') {
            $(this).text('On');
            $(this).css('color', '#1D7561');
            $(this).css('background-color', '#ccc', 'opacity', '0.1');
            $(this).css('opacity', '0.7');
            $(this).css('border-color', '#1D7561');

        } else {
            $(this).text('Off');
            $(this).css('color', '#A8282B');
            $(this).css('background-color', '#A4A4A4;', 'opacity', '0.1');
            $(this).css('opacity', '0.7');
            $(this).css('border-color', '#A8282B');


        }
    });

    $('.temp-button').click(function(e) {

        var inputValue = $("input").val();
        var temp = parseInt(inputValue);
        if (temp <= 60) {
            $(fireDiv).appendTo('#fire');
        } else if (temp <= 75) {
            $('.shade').slideUp(1500);
        } else if (temp >= 76) {
            $(fanDiv).appendTo('#fan');
            $('.shade').slideDown(1500);
            $(currentTime).appendTo('.room2');
        } else {
            //update state here

            console.log("Temperature is set to" + " " + temp + " " + "&#176;" + " " + "degrees");

        }

    });
});
