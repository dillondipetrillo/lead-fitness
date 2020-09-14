// Burger Menu Animation

$(".wrapper").click(function(){
    $(".icon").toggleClass("close");
    $('.burger-nav').toggleClass("open");
    $('body').toggleClass('noScroll');
    $('.overlay').toggleClass("open");
});

$(".burger-nav li, .burger-nav .nav-logo img, .overlay").click(function(){
   $('.burger-nav').removeClass("open");
   $(".icon").toggleClass("close");
   $('body').removeClass('noScroll');
   $('.overlay').removeClass("open");
});

// About chevron transition

$(".box").click(function() {
    $(this).toggleClass("selected");
});








