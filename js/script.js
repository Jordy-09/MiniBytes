  console.log("Hoi");

  let slideImage = document.querySelector(".slide-image");

  setTimeout(function () {
    slideImage.style.bottom = "-75vh";
  }, 1000);

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


//   slideImage.addEventListener("click", function () {
//     slideImage.style.height = "0px";
//   });