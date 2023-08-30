//change nav style on scroll
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// Contact Button
const textButtons = document.querySelectorAll('.rsvp_btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 26}deg)">${character}</span>`).join('')
})


// Swiper JS (Gallery Section)
let swiper = new Swiper(".mySwiper", {
    slidersPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599: {
        slidesPerView: 2,
        spaceBetween: 40
    },

    1023: {
        slidesPerView: 3,
        spaceBetween: 60
    }
    
  }
});

// Contact Form RSVP
let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };
