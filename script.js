// Toggles the mobile navigation menu when the hamburger icon is clicked.
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var navWrap = document.querySelector('.nav-wrap');

  if (hamburger && navWrap) {
    hamburger.addEventListener('click', function () {
      navWrap.classList.toggle('menu-open');
    });
  }

  // Close the mobile menu automatically if a nav link is clicked
  var navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navWrap) navWrap.classList.remove('menu-open');
    });
  });
});
