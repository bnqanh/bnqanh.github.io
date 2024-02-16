"use strict";

var _this = void 0;

// show scroll up
var scrollUp = function scrollUp() {
  var scrollUp = document.getElementById('scroll-up');
  _this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp); //scroll sections active link

var sections = document.querySelectorAll('section[id]');

var scrollActive = function scrollActive() {
  var scrollY = window.pageYOffset;
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive); //Previously selected topic (if user selected)
// dark light theme

var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = '--dark';
var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon'); //we obtain the current theme that the interface has by validating the dark-theme class

var getCurrentTheme = function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? 'dark-theme' : '';
};

var getCurrentIcon = function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? '--dark' : '';
}; //we validate if the user previously chose a topic


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark-theme' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === '--dark' ? 'add' : 'remove'](iconTheme);
} //activate / deactivate the theme manually with the button


themeButton.addEventListener('click', function () {
  //add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme); //we save the theme and the current icon that the user chose

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
}); // email js

var contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

var sendEmail = function sendEmail(e) {
  e.preventDefault(); // serviceID - templateID - #form - publickey

  emailjs.sendForm('service_rozcgws', 'template_bcg648v', '#contact-form', 'zUR-LeVb5ffUCEgBO').then(function () {
    // show sent message
    contactMessage.textContent = 'Message sent successfully ✅'; //Remove message after five seconds

    setTimeout(function () {
      contactMessage.textContent = '';
    }, 5000); //clear input field

    contactForm.reset();
  }, function () {
    // show error message
    contactMessage.textContent = 'Message not sent (service error) ❌';
  });
};

contactForm.addEventListener('submit', sendEmail); //scroll reveal animation

var sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 200 //reset: true // Animation repeat

});
sr.reveal('.home__hero-blob', {
  origin: 'left'
});
sr.reveal('.home__hero-text', {
  origin: 'right'
});
sr.reveal('.home__resume-left, .home__resume-right, .footer__wrapper');
//# sourceMappingURL=main.dev.js.map
