$(window).scroll(function() {
  if ($('.navbar').offset().top > 50) {
    $('#custom-nav').addClass('affix');
    $('.navbar-fixed-top').addClass('top-nav-collapse');
    $('.nav-item').addClass('nav-black-font');
  } else {
    $('#custom-nav').removeClass('affix');
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
    $('.nav-item').removeClass('nav-black-font');
  }
});
