/*global $*/
/*jslint sloppy:true, browser: true, white: true*/
$("h1.page-title").text("My code runs!");
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX,
                       top: e.pageY});
    $('.logo').toggleClass('rotated');
    $('h2').toggleClass('rotated');
});