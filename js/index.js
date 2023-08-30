
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

document.addEventListener('DOMContentLoaded', function () {
  const socialIcons = document.querySelectorAll('.social-links a img');

  socialIcons.forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
    });
  });
});

function navigateTo(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

  const navigationCards = document.querySelectorAll('.tableofContents .card');
  navigationCards.forEach(card => {
    card.addEventListener('click', scrollToSection);
  });

  function scrollToSection(event) {
    const targetSectionId = event.currentTarget.getAttribute('data-scroll-target');
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlayTableofContents");
    const projectOverview = document.getElementById("project-scope");

    window.addEventListener("scroll", function () {
      if (window.scrollY >= projectOverview.offsetTop) {
        overlay.classList.add("visible");
      } else {
        overlay.classList.remove("visible");
      }
    });
  });