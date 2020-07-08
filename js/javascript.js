$(document).ready(function() {
    $('#portfolio-button').click(function() {
        $('html, body').animate({
            scrollTop: $('#portfolio-button').offset().top
        }, 1000);
    });
});