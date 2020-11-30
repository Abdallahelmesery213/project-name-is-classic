$(function (){

// header height
$(".header").height($(window).height());

$(window).resize(function(){
    $(".header").height($(window).height());
});

// links add active class

$('.links li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
});
$('.links li').mouseenter(function() {
    $(this).addClass('active').siblings().removeClass('active');
});

// scrollTop on our services

$('.ser').click(function(){

    $('html,body').animate({

        scrollTop: $('#services').offset().top 
    },1000);
});

// scrollTop on testimonial
$('.test-imo').click(function(){
    $('html,body').animate({
        scrollTop:$('#testimo').offset().top
    },1000)
});

// scrollTop on portfolio
$('.port').click(function(){
    $('html,body').animate({
        scrollTop:$('.our-team').offset().top
    },1000)
});

// mixItUp in projects 
$('#container').mixItUp();

//
$('.our-projects ul li').click(function() {
    $(this).addClass('selected').siblings().removeClass('selected');
});

// trigger niceScroll
$('html').niceScroll({
    cursorcolor:"#1abc9c",
    cursorwidth:"10px",
    cursorborder:"1px solid #1abc9c"
});



}); 