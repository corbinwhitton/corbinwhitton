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

function logConsoleWelcomeMessage() {
  var welcomeMessage = "Howdy! Welcome to Corbin's console, seems like we'd make great friends considering you even made it here. Reach out to me on LinkedIn (https://www.linkedin.com/in/corbin-whitton/) and tell me that my website console sent ya! If you see any bugs, or have comments/suggestions, reach out, I'd love your feedback."
  console.log(welcomeMessage)
}

$(document).ready(function() {
  logConsoleWelcomeMessage();
  $('a[rel=external]').click(function() {
    openInNewWindow(this.href);
    return false;
  })
})