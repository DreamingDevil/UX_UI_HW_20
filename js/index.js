
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
  // Implement your navigation logic here
  // For example: scroll to the target section
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
