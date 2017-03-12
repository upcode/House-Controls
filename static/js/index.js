$(document).ready(function() {
     var fireDiv = $( '<div class="flames"><div class="flame"></div><div class="flame"></div><div class="flame"></div><div class="flame"></div></div><div class="logs"></div>');
     var fanDiv = $(' <div class="ceiling-container"><div class="ceiling-fan horizontal left"></div><div class="ceiling-fan horizontal right"></div><div class="ceiling-fan vertical rotated top"></div><div class="ceiling-fan vertical rotated bottom"></div></div>');
     var windowDiv = $('<div class="house-window-frame"><div class="house-window"></div><div class="house-window"></div><div class="house-window"></div><div class="house-window"></div></div>');
     // var windowDiv = $('');
    $(".light-switch").click(function() {
      console.log("I been clicked");
        $(".off").toggleClass("on");
    });


    $('.temp').click(function(e) {
        console.log("I been clicked");
        var inputValue = $("input").val();
        console.log(inputValue);
        var temp = parseInt(inputValue);
        console.log(temp);
        if (temp <= 60) {
            $(fireDiv).append('#fire');
            console.log("Heater is on");
        } else if (temp === 65 || temp <= 75) {
             $(windowDiv).appendTo('#shade');
              $('.shade').slideUp(1500);

            console.log("Window is open");

        } else if (temp >= 80) {
        	$(fanDiv).appendTo('#fan');
            console.log("Fan is on");
        } else {
            //update state here
            console.log("Temperature is set to" + " " + temp + " " + "&#176;" + " " + "degrees");

        }

	});
});
