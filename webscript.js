$("li.page-scroll").click(function() {
  $("li.page-scroll").removeClass("focusPage");
  $(this).addClass("focusPage");
});
$(".navbar-brand").click(function() {
  $("li.page-scroll").removeClass("focusPage");
});
$("#optionCircle").click(function() {
  $(".shapeP").removeClass("square");
  $(".shapeP").addClass("circle");
  $(".shapeGroup").removeClass("active");
  $(this).addClass("active");
});
$("#optionSquare").click(function() {
  $(".shapeP").removeClass("circle");
  $(".shapeP").addClass("square");
  $(".shapeGroup").removeClass("active");
  $(this).addClass("active");
});
$("#optionGreen").click(function() {
  $(".shapeP").removeClass("orangeP blueP");
  $(".shapeS").removeClass("orangeS blueS");
  $(".font").removeClass("orangeFont blueFont");
  $(".shapeP").addClass("greenP");
  $(".shapeS").addClass("greenS");
  $(".font").addClass("greenFont");
  $(".colorGroup").removeClass("active");
  $(this).addClass("active");
});
$("#optionOrange").click(function() {
  $(".shapeP").removeClass("greenP blueP");
  $(".shapeS").removeClass("greenS blueS");  
  $(".font").removeClass("greenFont blueFont");
  $(".shapeP").addClass("orangeP");
  $(".shapeS").addClass("orangeS");
  $(".font").addClass("orangeFont");
  $(".colorGroup").removeClass("active");
  $(this).addClass("active");
});
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});