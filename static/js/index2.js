//THIS ONE IS OLD AND WORKS
$(document).ready(function() {
	$('#fire').hide();
	$('#fan').hide();
	$('#shade').hide();
    $('#window').hide();
     $('#house-img').show();
    $(".light-switch").click(function() {
        $(".off").toggleClass("on");
    });


    $('.temp').click(function(e) {
        console.log("I been clicked");
        var inputValue = $("input").val();
        console.log(inputValue);
        var temp = parseInt(inputValue);
        console.log(temp);
        if (temp <= 60) {
            // $('.shade').slideDown(1500);
            $('#fire').hide();
            $('#fan').hide();
            $('#shade').hide();
            $('#window').hide();
            $('#fire').show();
            $('#house-img').hide();

            //update state here
            console.log("Heater is on");
        } else if (temp === 65 || temp <= 75) {
            $('.shade').slideUp(1500);
             $('.image').show();
             $('#fan').hide()
            //update state here
            console.log("Window is open");
            $('#fire').hide();

        } else if (temp >= 80) {
        	$('#fan').show()
            console.log("Fan is on");
            $('#fire').hide();
        } else {
            //update state here
            console.log("Temperature is set to" + " " + temp + " " + "&#176;" + " " + "degrees");

        }

	});
});
