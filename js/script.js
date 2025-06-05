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

    // Toggle het icoon tussen ☰ en ✕
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




//   slideImage.addEventListener("click", function () {
//     slideImage.style.height = "0px";
//   });