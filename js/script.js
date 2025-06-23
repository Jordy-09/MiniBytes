console.log("Hoi");

  let slideImage = document.querySelector(".slide-image");

  setTimeout(function () {
    slideImage.style.bottom = "-75vh";
  }, 1000);

  // Hamburger menu toggle
  let hamburger = document.getElementById('hamburger');
  let navLinks = document.getElementById('navLinks');
  let hamburgerIcon = document.getElementById('hamburger-icon');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Toggle tussen ☰ en ✕
    if (navLinks.classList.contains('show')) {
      hamburgerIcon.textContent = '✕';
    } else {
      hamburgerIcon.textContent = '☰';
    }
  });


// Header scroll effect
let lastScrollTop = 0;

let defaultHeader = document.querySelector('.header');
let workshopHeader = document.querySelector('.workshop-header');

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    if (defaultHeader) defaultHeader.classList.add('hide');
    if (workshopHeader) workshopHeader.classList.add('hide');
  } else {
    if (defaultHeader) defaultHeader.classList.remove('hide');
    if (workshopHeader) workshopHeader.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Automatische horizontale scroll voor de galerij (correcte classnaam)
window.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.galerij-container');
  if (!container) return;
  let scrollAmount = 1.2; // px per frame
  let direction = 1;
  let animationId;

  function autoScroll() {
    if (!container) return;
    container.scrollLeft += scrollAmount * direction;
    // Omkeren bij einde
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 2) {
      direction = -1;
    } else if (container.scrollLeft <= 0) {
      direction = 1;
    }
    animationId = requestAnimationFrame(autoScroll);
  }

  container.addEventListener('mouseenter', () => cancelAnimationFrame(animationId));
  container.addEventListener('mouseleave', () => autoScroll());

  autoScroll();
});


