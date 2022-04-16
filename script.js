$(document).ready(function() {
    var value, temp = null;
    $('#mainContainer2').hide();

    $('ul li button').on('click', function(){
        $(this).toggleClass('clicked');
        value = $(this).val();
        if (value == temp) {
            value = undefined;
        }
        temp = value;
    });
    
    $('#submitBtn').on('click', function() {
        if (value != undefined) {
            $('div #rating span').remove();
            $("body div #rating").append("You selected " + value + " out of 5");
        }
        $('#mainContainer1').hide();
        $('#mainContainer2').show();
    });
})