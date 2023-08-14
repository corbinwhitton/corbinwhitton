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

function openInNewWindow(url) {
  var newWindow = window.open(url);
  newWindow.opener = null;
  console.log(url + " opened in new window securely");
}

$(document).ready(function() {
  $('a[rel=external]').click(function() {
    openInNewWindow(this.href);
    return false;
  })
})