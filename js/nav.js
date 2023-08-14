$(document).on("scroll", function () {
  if ($(document).scrollTop() > 86) {
    $("#navbar").addClass("sticky");
    $("#nav-logo").addClass("color-white");
    $(".nav-custom-link").addClass("color-white");
    $(".navbar-btn").addClass("navbar-btn-white");
  }
  else {
    $("#navbar").removeClass("sticky");
    $("#nav-logo").removeClass("color-white");
    $(".nav-custom-link").removeClass("color-white");
    $(".navbar-btn").removeClass("navbar-btn-white");
  }
});

function navbarHamburgerChanger(x) {
  x.classList.toggle("navbar-hamburger-active");
}

$(document).ready(function() {
  $('a[rel=external]').attr('target', '_blank').attr('rel', 'external noopener noreferrer');
})